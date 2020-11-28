/* eslint-disable no-console */
const spellcheck = require('spellchecker');
const pkg = require('./package.json');
const read = require('fs').promises.readFile;
const sjx = require('shelljs');

sjx.config.silent = true;

const tryToRead = async (path) => {
  try {
    return await read(path);
  } catch (ignored) {
    console.log(ignored);
    return '';
  }
};

const asJson = (str) => {
  try {
    const json = JSON.parse(str.toString('utf-8'));
    return [
      ...(json?.['cSpell.words'] || []),
      ...(json?.['cSpell.ignoreWords'] || [])
    ];
  } catch (ignored) {
    return [];
  }
};

const asText = (str) => str.toString('utf-8').split('\n');
const sanitizeWord = (word) => word.replace(/[^a-zA-Z0-9'\w]/g, ' ');

const splitOutWords = (phrase) => {
  return [...phrase.split(/(?:[^\w\-_']|\s)\s*/g), phrase]
    .map((a) => sanitizeWord(a.trim()))
    .filter((a) => !!a);
};

const keys = (obj) => Object.keys(obj).map(splitOutWords).flat();

(async () => {
  const lastCommitMsg = (await read('./.git/COMMIT_EDITMSG')).toString('utf-8');
  const homeDir = require('os').homedir();

  const ignoreWords = Array.from(
    new Set(
      [
        ...(await Promise.all([
          tryToRead('./.spellcheckignore').then(asText),
          tryToRead(`${homeDir}/.config/_spellcheckignore`).then(asText),
          tryToRead('./.vscode/settings.json').then(asJson),
          tryToRead(`${homeDir}/.config/Code/User/settings.json`).then(asJson)
        ])),
        ...require('text-extensions'),
        ...keys(pkg.dependencies).map(splitOutWords),
        ...keys(pkg.devDependencies).map(splitOutWords),
        ...keys(pkg.scripts).map(splitOutWords),
        ...sjx
          .exec('git log --format="%B" HEAD~1')
          .stdout.split(/(?:[^\w\-_']|\s)\s*/g)
      ]
        .flat()
        .filter(Boolean)
        .map((word) => word.trim().toLowerCase())
    )
  );

  const seen = [];

  const typos = spellcheck
    .checkSpelling(lastCommitMsg)
    .map((typoLocation) => {
      return lastCommitMsg
        .slice(typoLocation.start, typoLocation.end)
        .toLowerCase();
    })
    .filter(
      (typo) =>
        !ignoreWords.includes(typo) && !ignoreWords.includes(sanitizeWord(typo))
    );

  if (typos.length) {
    console.warn(
      'WARNING: there may be misspelled words in your commit message!'
    );
    console.warn(
      'Commit messages can be fixed before push with `git commit -S --amend`'
    );
    console.warn('---');

    for (const typo of typos) {
      if (!seen.includes(typo)) {
        const corrections = spellcheck.getCorrectionsForMisspelling(typo);
        const suggestion = corrections.length
          ? ` (did you mean ${corrections.slice(0, 5).join(', ')}?)`
          : '';

        seen.push(typo);
        console.warn(`${typo}${suggestion}`);
      }

      if (seen.length == 5) break;
    }

    typos.length > 5 && console.warn(`${typos.length - 5} more...`);
    typos.length && console.warn('---');
  }
})();

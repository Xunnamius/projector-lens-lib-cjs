/* eslint-disable no-console */
const spellcheck = require('spellchecker');
const read = require('fs').promises.readFile;

const tryToRead = async (path) => {
  try {
    return await read(path);
  } catch (ignored) {
    return '';
  }
};

const asJson = (str) => {
  try {
    const json = JSON.parse(str.toString('utf-8'));
    return [...(json?.['cSpell.words'] || []), ...(json?.['cSpell.ignoreWords'] || [])];
  } catch (ignored) {
    return [];
  }
};

const asText = (str) => {
  return str
    .toString('utf-8')
    .split('\n')
    .map((word) => word.trim())
    .filter((word) => !!word);
};

const sanitize = (word) => word.replace(/[^a-zA-Z0-9']/g, ' ');

(async () => {
  const lastCommitMsg = await require('last-commit-message')();

  const ignoreWords = Array.from(
    new Set(
      (
        await Promise.all([
          await require('text-extensions'),
          tryToRead('./.spellcheckignore').then(asText),
          tryToRead('~/.config/_spellcheckignore').then(asText),
          tryToRead('./.vscode/settings.json').then(asJson),
          tryToRead('~/.config/Code/User/settings.json').then(asJson)
        ])
      ).flat()
    )
  );

  let spoken = false;
  const seen = [];
  const typoLocations = spellcheck.checkSpelling(lastCommitMsg);

  if (typoLocations.length) {
    for (const typoLocation of typoLocations) {
      if (spoken) {
        spoken = true;
        console.warn('WARNING: there may be misspelled words in your commit message!');
        console.warn('These can be fixed before push with `git commit -S --amend`');
        console.warn('---');
      }

      const typo = lastCommitMsg.slice(typoLocation.start, typoLocation.end).toLowerCase();

      if (ignoreWords.includes(typo) || ignoreWords.includes(sanitize(typo))) continue;

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

    typoLocations.length > 5 && console.warn(`${typoLocations.length - 5} more...`);
  }
})();

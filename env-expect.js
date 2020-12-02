/* eslint-disable no-console */
class IllegalEnvironmentError extends Error {}

const throwError = (error) => {
  throw new IllegalEnvironmentError(error);
};

const normalize = (rule) => {
  const errorMessage = ``;

  if (typeof rule == 'string') {
    return {
      operation: 'or',
      variables: [{ name: RegExp(rule), value: /.*/ }],
      required: true,
      errorMessage
    };
  } else if (typeof rule.name == 'string' && typeof rule.value == 'string') {
    return {
      operation: 'or',
      variables: [{ name: RegExp(rule.name), value: RegExp(rule.value) }]
    };
  } else if (
    ['and', 'or', 'xor', 'not'].includes(rule.operation) &&
    Array.isArray(rule.variables)
  ) {
    return {
      operation: rule.operation,
      variables: rule.variables.map((r) => normalize(r).variables).flat()
    };
  } else
    throw new IllegalEnvironmentError(
      `bad rule encountered in "env-expect": ${JSON.stringify(rule)}`
    );
};

const _make = (op, vars) => {
  return {
    operation: op,
    variables: vars.flat()
  };
};

/**
 * Accepts a `nameRule` (and, optionally, a `valueRule`) regexp string and
 * constructs an "OR" operation rule from them
 */
const makeRule = (nameRule, valueRule) =>
  normalize(
    typeof valueRule != 'string' ? nameRule : { name: nameRule, value: valueRule }
  );

/**
 * Accepts one or more strings and constructs an "AND" operation rule from them
 */
const makeANDRule = (...vars) => _make('and', vars);

/**
 * Accepts one or more strings and constructs an "OR" operation rule from them
 */
const makeORRule = (...vars) => _make('or', vars);

/**
 * Accepts one or more strings and constructs an "XOR" operation rule from them
 */
const makeXORRule = (...vars) => _make('xor', vars);

/**
 * Accepts one or more strings and constructs an "NOT" operation rule from them
 */
const makeNOTRule = (...vars) => _make('not', vars);

module.exports = {
  makeRule,
  makeANDRule,
  makeORRule,
  makeXORRule,
  makeNOTRule,

  /**
   * This function accepts a single object parameter with a list of `rules` used
   * to verify `env`. `isCli`, if `true` (the default), will cause this function
   * to output results via console and throw if verification fails.
   *
   * If `env` is not defined, `process.env` is used instead. If `rules` is not
   * defined, the "rules" defined under the "env-expect" key in ./package.json
   * are used instead.
   *
   * Each rule can be one of:
   *
   * (1) A regex STRING
   *
   * (2) An OBJECT where "name" and "value" are both regex STRINGs; "required"
   * is optional and defaults to `true`; and "errorMessage" is optional:
   *
   * {
   *   "name": "^(MY_)?VARIABLE_NAME$",
   *   "value": "^(true|false)$",
   *   "required": true, // ◄ optional
   *   "errorMessage": "some custom error message" // ◄ optional
   * }
   *
   * (3) An OBJECT where "operation" is either "xor", "or", "and", or "not";
   * "variables" is an array where each element is (1) or (2); "required" is
   * optional and defaults to `true`; and "errorMessage" is optional:
   *
   * {
   *   "operation": "xor",
   *   "variables": ["^MY_V_1$", "^MY_V_2$"],
   *   "required": false, // ◄ optional
   *   "errorMessage": "some custom error message" // ◄ optional
   * }
   *
   * With both (2) and (3), "errorMessage" is output to the console if the rule
   * fails verification or was not found in `env` but "required" is `true`.
   *
   * When `isCli=false`, this function will return an array of objects with the
   * shape of (3). These are all the rules that failed to match against the
   * current environment. An empty array is returned if all rules matched and
   * verification succeeded. When `isCli=true` (the default), this function will
   * output results via console and throw if verification fails.
   */
  verifyEnvironment({ rules, env, isCli = true }) {
    let fromPkg = false;

    if (!rules) {
      try {
        ({
          'env-expect': { rules }
        } = require('./package.json'));
        fromPkg = true;
      } catch (ignored) {}
    }

    if (!Array.isArray(rules)) {
      if (!isCli) return [];
      throw new IllegalEnvironmentError(
        fromPkg
          ? '"expect-env" key must have an array value in package.json'
          : '`rules` must be an array'
      );
    }

    const definedVars = Object.entries(process.env)
      .filter(([, val]) => typeof val == 'string')
      .map(([key]) => key);

    const verificationSucceeded = rules.map(normalize).every((rule) => {
      if (typeof rule == 'string') {
        if (!micromatch(definedVars, Array.from(rule))) throwError(errorMessage);
      } else if (rule?.operation && rule?.variables) {
        // stuff
      }
    });
  }
};

!module.parent && module.exports.verifyEnvironment();

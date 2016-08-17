/* global _locator */
/* eslint radix: ["error", "as-needed"] */

module.exports = class NameFinder {
  constructor (config, options) {
    var NameFinderService = _locator.get('StaticNameFinderService');

    this.nameFinder = new NameFinderService(config);
    this.options = options;
  }

  random () {
    return this.nameFinder.random();
  }
};

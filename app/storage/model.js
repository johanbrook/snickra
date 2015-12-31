'use strict';

const schema = require('js-schema');

export const isValid = schema({
  name: String,
  url: String,
  dir: String,
  commands: {
    publish: String,
    serve: String
  }
});

const makeFullUrl = (url) => {
  return !/https?:\/\//.test(url) ? `http://${url}` : url;
};

/**
 * Transforms the site in order to be inserted into a storage. This
 * function expects `site` to be a valid site object.
 *
 * @see isValid
 * @param  {object} site A site object
 * @return {object} a transformed (mutated) site
 */
export const sanitize = (site) => {
  site.url = makeFullUrl(site.url);

  return site;
};

export const Defaults = {
  commands: {
    publish: 'npm run publish',
    serve: 'npm run serve'
  }
};

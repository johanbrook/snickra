import Vue from 'vue';

/**
 * Strips the http:// (and potential www) part of an URL. Returns
 * the original argument if it's falsy or not a string.
 *
 * @param  {string} url - the URL
 * @return {string} the transformed URL
 */
Vue.filter('naked-domain', (url) => {
  if(!url || typeof url !== 'string') return url;
  return url.replace(/^https?:\/\/(?:www\.)?/, '');
});

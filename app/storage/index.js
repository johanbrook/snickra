'use strict';

const _ = require('underscore');

import {LocalStorageAdapter} from './LocalStorageAdapter';
import {isValid, sanitize} from './model';

module.exports = {

  store: new LocalStorageAdapter('snickra'),

  saveSite(site) {
    /* eslint new-cap: 0 */
    if(!isValid(site)) {
      throw new Error('Invalid site: ' + site);
    }

    const sites = this.getSites();

    sites.push(sanitize(site));

    this.store.save('sites', sites);
    return this.store.get('sites').length;
  },

  updateSite(site) {
    if(!site.url) {
      throw new Error('Cannot update a site without an URL as key');
    }

    const existing = this.getSite(site.url);

    if(existing) {
      this.removeSite(existing.url);
      this.saveSite(_.extend(existing, site));
      return true;
    }

    return false;
  },

  getSites() {
    return this.store.get('sites') || [];
  },

  getSite(url) {
    const sites = this.store.get('sites') || [];
    return _.findWhere(sites, {url});
  },

  removeSite(url) {
    const sites = this.store.get('sites') || [];

    if(sites.length === 0) return false;

    this.store.save('sites', _.reject(sites, site => site.url === url));
    return this.store.get('sites').length;
  }
};

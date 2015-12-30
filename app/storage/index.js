'use strict';

const LocalStorageAdapter = require('./LocalStorageAdapter');
const _ = require('underscore');

const schema = require('js-schema');
const ADAPTERS = ['localStorage'];

const Site = schema({
  name: String,
  url: String,
  commands: {
    publish: String,
    serve: String
  }
});

module.exports = class Storage {

  constructor(adapterName) {
    adapterName = adapterName || 'localStorage';
    if(ADAPTERS.indexOf(adapterName) === -1) {
      throw new Error(`Unsupported adapter: ${adapterName}`);
    }

    if(adapterName === 'localStorage') {
      this.store = new LocalStorageAdapter('snickra');
    }
  }

  saveSite(site) {
    /* eslint new-cap: 0 */
    if(!Site(site)) {
      throw new Error(Site.errors(site));
    }

    const sites = this.getSites();

    sites.push(site);

    this.store.save('sites', sites);
    return this.store.get('sites').length;
  }

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
  }

  getSites() {
    return this.store.get('sites') || [];
  }

  getSite(url) {
    const sites = this.store.get('sites') || [];
    return _.findWhere(sites, {url});
  }

  removeSite(url) {
    const sites = this.store.get('sites') || [];

    if(sites.length === 0) return false;

    this.store.save('sites', _.reject(sites, site => site.url === url));
    return this.store.get('sites').length;
  }
};

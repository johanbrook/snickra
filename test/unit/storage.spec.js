'use strict';

const test = require('tape');
const Storage = require('../../app/storage');
const _ = require('underscore');

const getSiteFixture = (ex) => {
  return _.extend({
    name: 'Site',
    url: 'http://site.com',
    commands: {
      publish: 'foo',
      serve: 'bar'
    }
  }, ex);
};

const reset = () => window.localStorage.removeItem('snickra');

test('Storage should exist', t => {
  t.ok(Storage,
    'Storage constructor should be defined');
  t.end();
});

test('Storage constructor', t => {
  t.ok(new Storage(),
    'Storage should instantiate an object');
  t.end();
});

test('save an incorrect site', t => {
  reset();

  const store = new Storage();
  let didThrow = false;

  try {
    store.saveSite({name: 'foo'});
  } catch(ex) {
    didThrow = true;
  }

  t.ok(didThrow,
    '#saveSite should throw error on incorrect schema');
  t.end();
});

test('save a site', t => {
  reset();

  const store = new Storage();

  const num = store.saveSite(getSiteFixture());

  t.equal(num, 1,
    '#saveSite should save a site and return the number of sites');

  t.end();
});

test('update a site', t => {
  reset();

  const store = new Storage();
  const item = getSiteFixture();

  store.saveSite(item);
  item.name = 'lolol';
  item.foo = 'bar';

  const res = store.updateSite(item);

  t.ok(res,
    '#updateSite should update a site by its URL and return a boolean');

  const newItem = store.getSite(item.url);

  t.deepEqual(newItem, {
    name: 'lolol',
    url: 'http://site.com',
    foo: 'bar',
    commands: {
      publish: 'foo',
      serve: 'bar'
    }
  },
    '#updateSite should update a site\'s props');
  t.end();
});

test('remove a site', t => {
  reset();

  const store = new Storage();

  const num = store.saveSite(getSiteFixture());
  t.equal(num, 1);

  const newNum = store.removeSite('http://site.com');

  t.equal(newNum, 0,
    '#removeSite should remove a site by its URL and return the new number of sites');

  const site = store.getSite('http://site.com');

  t.notOk(site,
    '#removeSite should remove a site');

  t.end();
});

test('get all sites', t => {
  reset();

  const store = new Storage();

  store.saveSite(getSiteFixture({name: 'Name 1'}));
  store.saveSite(getSiteFixture({name: 'Name 2'}));
  store.saveSite(getSiteFixture({name: 'Name 3'}));

  const sites = store.getSites();

  t.equal(sites.length, 3,
    '#getSites should return all sites');

  t.equal(sites[0].name, 'Name 1');
  t.equal(sites[1].name, 'Name 2');
  t.equal(sites[2].name, 'Name 3');

  t.end();
});

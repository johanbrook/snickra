const test = require('tape');
const LocalStorage = require('../../app/storage/LocalStorageAdapter');

const NAMESPACE = 'snickra';

const factory = () => new LocalStorage(NAMESPACE);

test('setup', (t) => {
  window.localStorage.removeItem(NAMESPACE);
  t.end();
});

test(t => {
  t.ok(LocalStorage, 'LocalStorage should be defined');
  t.end();
});

test('constructor', t => {
  const store = factory();
  t.equal(store._key, NAMESPACE,
    'the constructor should support a namespace key in the constructor');
  t.end();
});

test('empty as default', t => {
  const store = factory();
  t.deepEqual(store.getStore(), {},
    '#getStore should return empty as default');
  t.end();
});

test('parse string values', t => {
  const store = factory();
  window.localStorage.setItem(NAMESPACE, JSON.stringify({ foo: 'bar' }));
  t.deepEqual(store.getStore(), { foo: 'bar' },
    '#getStore should parse string vales into JSON');
  t.end();
});

test('stringify values when inserting', t => {
  const store = factory();
  store.persistStore({ foo: 'bar' });

  t.equal(window.localStorage.getItem(NAMESPACE), '{"foo":"bar"}',
    '#persistStore should stringify values when inserting into store');
  t.end();
});

test('save an item', t => {
  const store = factory();
  window.localStorage.setItem(NAMESPACE, '{"foo":"bar"}');

  store.save('foo2', 'bar2');
  t.equal(window.localStorage.getItem(NAMESPACE), '{"foo":"bar","foo2":"bar2"}',
    '#save should be able to save an item with a key');
  t.end();
});

test('get an item', t => {
  const store = factory();

  window.localStorage.setItem(NAMESPACE, '{"foo":"bar"}');
  t.equal(store.get('foo'), 'bar',
    '#get should return an item for a key');
  t.end();
});

test('clear store', t => {
  const store = factory();

  window.localStorage.setItem(NAMESPACE, '{"foo":"bar"}');
  store.clear();

  t.notOk(window.localStorage.getItem(NAMESPACE),
    '#clear should clear the whole store');
  t.end();
});

test('remove an item', t => {
  const store = factory();

  window.localStorage.setItem(NAMESPACE, '{"foo":"bar"}');
  store.remove('foo');

  t.notOk(store.get('foo'),
    '#remove should remove an item for a key');
  t.end();
});

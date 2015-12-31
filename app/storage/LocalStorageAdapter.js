'use strict';

export class LocalStorageAdapter {

  constructor(namespace) {
    if(!namespace) {
      throw new Error('You must provide a namespace for this store!');
    }
    this._key = namespace;
    this._store = window.localStorage;
  }

  getStore() {
    const item = this._store.getItem(this._key);
    return item ? JSON.parse(item) : {};
  }

  persistStore(store) {
    this._store.setItem(this._key, JSON.stringify(store));
  }

  save(key, props) {
    const item = this.getStore();
    item[key] = props;

    this.persistStore(item);
    this.get(key);
  }

  get(key) {
    return this.getStore()[key];
  }

  clear() {
    this._store.removeItem(this._key);
  }

  remove(key) {
    const item = this.getStore();

    if(item) {
      delete item[key];
      this.persistStore(item);
    }
  }
}

import Vue from 'vue';
import { shell } from 'electron';

/**
 * Opens a link in the browser, externally from the Electron app.
 */
Vue.directive('external-link', {
  bind() {
    this.el.addEventListener('click', (evt) => {
      evt.preventDefault();
      shell.openExternal(this.el.href);
    }, false);
  },

  unbind() {
    this.el.removeEventListener('click');
  }
});

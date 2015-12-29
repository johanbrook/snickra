import Vue from 'vue';
import App from './app.vue';

if (process.env.NODE_ENV === 'development') {
  Vue.config.debug = true;
  Vue.config.silent = false;
}

new Vue({
  el: 'body',
  components: { App }
});

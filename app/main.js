'use strict';

import Vue from 'vue';
import App from './app.vue';
import Router from 'vue-router';
import { configRouter } from './router';

// Directives
import './directives/external-link';

// Filters
import './filters/naked-domain';

Vue.use(Router);

const router = new Router();

configRouter(router);

window.Router = router;

if (process.env.NODE_ENV === 'development') {
  Vue.config.debug = true;
  Vue.config.silent = false;
}

router.start(App, '#app');

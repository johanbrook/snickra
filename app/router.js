import List from './components/ListView.vue';
import BlankSlate from './components/BlankSlate.vue';
import NewSite from './components/NewSiteView.vue';
import Site from './components/SiteDetailView.vue';

import store from './storage';

export function configRouter(router) {
  router.map({
    '/': {
      name: 'home',
      component: List
    },
    '/welcome': {
      name: 'welcome',
      component: BlankSlate,
      byPass: true
    },
    '/new/:directory': {
      name: 'newSite',
      component: NewSite,
      byPass: true
    },
    '/site/:url': {
      name: 'siteDetail',
      component: Site
    }
  });

  router.redirect({
    '*': '/'
  });

  router.beforeEach(() => window.scrollTo(0, 0));

  router.beforeEach(transition => {
    if((transition.to && !transition.to.byPass) && store.getSites().length === 0) {
      transition.abort();
      router.go({name: 'welcome'});
    } else {
      transition.next();
    }
  });
}

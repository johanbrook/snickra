<template>
  <div class="view view--site">

    <div class="view__toolbar">
      <div>
        <a class="btn mode--label" v-link="{name: 'home'}">Back</a>
      </div>

      <div>
        <div class="switch">
          <a class="btn switch__btn" v-bind:class="{'active': isActive('publish')}" href="#" @click.prevent="setTab('publish')">Publish</a>
          <a class="btn switch__btn" v-bind:class="{'active': isActive('settings')}" href="#" @click.prevent="setTab('settings')">Settings</a>
        </div>
      </div>

      <div>
        <a href="#" class="btn mode--label">Code</a>
      </div>
    </div>

    <div class="view__content">
      <component :is="tab" :site="site"></component>
    </div>
  </div>
</template>

<script>
  import store from '../storage';
  import Publish from './SitePublishView.vue';
  import Settings from './SiteSettingsView.vue';

  export default {
    name: 'SiteDetailView',

    components: {
      publish: Publish,
      settings: Settings
    },

    data() {
      return {
        site: store.getSite(decodeURIComponent(this.$route.params.url)),
        tab: 'publish'
      };
    },

    methods: {
      setTab(tab) {
        this.tab = tab;
      },

      isActive(tab) {
        return this.tab === tab;
      }
    }
  };
</script>

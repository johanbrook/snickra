<template>
  <div class="view view--add-site">

    <div class="view__header">
      <h1>Create a new site</h1>
    </div>

    <div class="view__content">
      <form class="site-form create-new-site-form" @submit.prevent="createSite">
        <p>
          <label for="name">Site name</label>
          <input v-model="name" id="name" type="text" placeholder="My Awesome Site">
        </p>
        <p>
          <label for="url">Site address</label>
          <input v-model="url" id="url" type="text" placeholder="http://awesome-site.com">
        </p>

        <p class="detail">
          You will be able to change these details later on as well, so don’t worry.
        </p>

        <p class="form-submit">
          <input type="submit" class="btn" value="Create">
          <a v-link="{name: 'welcome'}" class="btn mode--link">Cancel</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  import store from '../storage';
  import {Defaults} from '../storage/model';
  import _ from 'underscore';

  export default {

    data() {
      return {
        directory: decodeURIComponent(this.$route.params.directory),
        url: '',
        name: ''
      };
    },

    methods: {
      createSite() {
        const {name, url, directory} = this;

        if(!name || !url) {
          return;
        }

        const site = _.extend(Defaults, { name, url, dir: directory });

        try {
          store.saveSite(site);
          Router.go({name: 'home'});

        } catch(ex) {
          console.error(ex);
        }
      }
    }
  };
</script>

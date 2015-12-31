<template>
  <div class="view-sites">

    <item v-for="site in sites" :item="site" track-by="url"></item>

  </div>
</template>

<script>
  import store from '../storage';
  import Item from './Item.vue';

  export default {
    name: 'ListView',

    components: {
      Item
    },

    // Initial state
    data() {
      return {
        sites: store.getSites()
      };
    }
  };
</script>

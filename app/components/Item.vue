<template>
  <div class="item" @click="goToSite">
    <div>
      <h2 class="item__name">{{ item.name }}</h2>
      <span class="detail item__url">{{ item.url }}</span>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../variables';

  .item {
    display: flex;
    justify-content: space-between;
    padding: .5rem 1rem;
    position: relative;

    &::after {
      display: block;
      position: absolute;
      bottom: 0;
      left: 1rem;
      right: 0;
      content: '';
      border-bottom: 1px solid $border-color;
    }

    &:hover {
      background-color: $off-white;
    }
  }
</style>

<script>
  export default {

    name: 'Item',

    props: {
      item: {
        required: true,
        type: Object
      }
    },

    methods: {
      goToSite() {
        Router.go({name: 'siteDetail', params: {url: encodeURIComponent(this.item.url)}});
      }
    }
  };
</script>

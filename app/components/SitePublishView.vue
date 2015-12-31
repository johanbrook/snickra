<template>
  <div>
    <h2>{{site.name}}</h2>
    <div class="detail">
      <a href="#">Preview locally</a> ·
      <a v-external-link href="{{site.url}}">{{site.url | naked-domain}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SitePublishView',

    props: {
      site: {
        type: Object,
        required: true
      }
    }
  };
</script>

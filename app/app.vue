<template>
  <h1>Hello!</h1>
</template>

<style lang="scss">
  $color: blue;

  body {
    display: flex;
    font-family: sans-serif;
    color: $color;
  }
</style>

<script>
export default {
  data() {
    return {
      msg: 'Hello from vue-loader!'
    };
  }
};
</script>

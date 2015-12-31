<template>
  <main role="main" class="app-container">
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
  @import 'variables';

  * {
    margin: 0;
    padding: 0;
    cursor: default;
  }

  body {
    font-family: $font;
    background-color: #fff;
    color: $text-color;
    user-select: none;
    font-size: 12px;
  }

  a {
    color: $comp-blue;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: darken($comp-blue, 20%);
      text-decoration: underline;
    }
  }

  h1, h2, h3 {
    font-weight: 200;
    margin: 0;
  }

  h1 {
    font-size: 18px;
  }

  h2 {
    font-size: 16px;
  }

  h3 {
    font-size: 13px;
  }

  .btn {
    cursor: default;
    display: inline-block;
    -webkit-appearance: none;
    background: #fff;
    border-radius: 3px;
    padding: .3em 1em;
    color: $text-color;
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 500;
    box-shadow: 0 1px 1px 0 rgba(#000, .20),
                0 0 0 1px rgba(#000, .10);

    &:active {
      background-color: darken($off-white, 3%);
    }

    &:hover {
      color: $text-color;
      text-decoration: none;
    }

    &.mode--label {
      border: 0;
      box-shadow: none;
      padding: 0;

      &:active {
        background-color: transparent;
      }
    }
  }

  .view {

    &__toolbar {
      padding: $spacing;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $border-color;
    }

    &__content {
      padding: $spacing;
    }
  }

  .detail {
    color: $grey;
    font-weight: 200;
    font-size: 11px;
  }

  .switch {
    display: flex;
    font-size: .8em;

    .switch__btn {
      flex: 1;
      position: relative;

      &.active {
        background-color: $comp-blue;
        color: #fff;
        box-shadow: $comp-blue 0 0 0 1px;
        z-index: 10;
      }

      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-right: 1px;
      }

      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './scss/font-faces';

* {
  font-family: 'S-CoreDream-3Light', sans-serif !important;

  &:active,
  &:focus {
    outline: none;
  }
}

a {
  text-decoration: none;
}

hr {
  border-top: 1px solid #f3f3f3;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>

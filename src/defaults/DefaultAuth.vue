<script>
export default {
  props: {
    title: String,
  },
};
</script>

<template>
  <div class="container">
    <div class="container__content">
      <div class="container__header">
        <img
          class="container__logo"
          :src="require('../assets/inu-logo.png')"
        />
        <h1 class="container__title">
          {{ title }}
        </h1>
        <span>INU 인트라넷</span>
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;

  &__content {
    width: 500px;
    text-align: center;
    padding-top: 2.5rem;
  }

  &__header {
    padding-bottom: 1.8rem;
  }

  &__logo {
    width: 120px;
    height: 120%;
  }

  &__title {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }
}
</style>

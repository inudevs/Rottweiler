<script>
export default {
  props: {
    icon: String,
    title: String,
    desc: String,
    active: String,
  },
};
</script>

<template>
  <el-container class="page">
    <jovian-submenu :active="active" />

    <el-container>
      <el-header class="page__header">
        <h1 class="page__header-title">
          <i class="page__icon" :class="icon" /> {{ title }}
        </h1>
        <p class="page__header-desc">{{ desc }}</p>
      </el-header>

      <el-main>
        <slot name="main" />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss">
.page {
  height: 100%;

  &__icon {
    color: #F4B81D;
  }

  .el-menu {
    height: calc(100% - 120px);
    padding-top: 0;
  }

  .el-header {
    height: unset !important;
    padding-top: 1.5rem;
    padding-bottom: 0.2rem;
    border-bottom: .5px dashed #F4B81D;
  }

  &__header-title {
    margin: 0;
    font-size: 1.4rem;
  }

  &__header-desc {
    padding: 0;
    font-size: 1rem;
    margin-top: 0.2rem;
  }

  .el-table__row {
    cursor: pointer;
  }

  &__service-name {
    font-weight: bold;
  }

  &__buttons {
    position: absolute !important;
    bottom: 1rem;
  }

  &__button {

    i {
      font-size: 1.5rem;
    }
  }
}
</style>

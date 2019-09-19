<script>
import DefaultPage from '../defaults/DefaultPage.vue';

export default {
  components: {
    DefaultPage,
  },
};
</script>

<template>
  <default-page
    icon="el-icon-s-promotion"
    title="대시보드"
    desc="INU 인트라넷"
  >
    <template v-slot:main>
    </template>
  </default-page>
</template>

<style lang="scss">
</style>

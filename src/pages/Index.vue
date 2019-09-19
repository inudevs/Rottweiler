<script>
import DefaultPage from '../defaults/DefaultPage.vue';

export default {
  components: {
    DefaultPage,
  },
  data() {
    return {
      logs: [],
      colors: [
        '#67c23a',
        '#e1f3d8',
        '#ffe8ad',
        '#ffd569',
        '#f56c6c',
      ],
    };
  },
  async mounted() {
    await this.getLogs();
  },
  methods: {
    async getLogs() {
      const { data: { start, end, logs } } = await this.$api.get('/log');
      this.logs = [200, 304, 401, 404, 500].map(status => [
        status,
        logs.filter(log => log.status == status).length
      ]);
    },
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
      <el-card>
        <pie-chart
          :donut="true"
          :data="logs"
          :colors="colors"
        />
      </el-card>
    </template>
  </default-page>
</template>

<style lang="scss">
</style>

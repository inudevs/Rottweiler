<script>
import DefaultPage from '../defaults/DefaultPage.vue';

export default {
  components: {
    DefaultPage,
  },
  data() {
    return {
      logs: [],
      start: '',
      end: '',
      dataset: {
        status: [],
        recent: [],
      },
      colors: [
        '#ffe8ad',
        '#ffd569',
        '#f56c6c',
        '#dd594d',
        '#da3366',
      ],
      fields: {
        logs: [
          { prop: 'method', label: '메소드' },
          { prop: 'path', label: '경로' },
          { prop: 'status', label: '상태' },
          { prop: 'elapsed', label: '처리 시간' },
          { prop: 'date', label: '처리 날짜' },
        ],
      },
    };
  },
  async mounted() {
    await this.getLogs();
  },
  methods: {
    async getLogs() {
      const { data: { start, end, logs } } = await this.$api.get('/log');
      this.logs = logs.map(({
        method, path, status, elapsed, timestamp,
      }) => ({
        method,
        path,
        status,
        elapsed: `${elapsed}ms`,
        date: this.$moment(timestamp).fromNow(),
      }));
      this.logs = this.logs.sort((a, b) => a.log - b.log);
      this.dataset.status = [200, 304, 401, 404, 500].map(status => [
        status,
        logs.filter(log => log.status === status).length,
      ]);
      this.dataset.recent = this.logs.slice(-5);
      this.start = this.$moment(start).format('LLL');
      this.end = this.$moment(end).format('LLL');
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
        <el-row class="index__row">
          <div class="index__requests">
            <el-popover
              placement="top-start"
              title="대시보드를 제외한 하루 전까지의 모든 요청에 대한 데이터입니다."
              width="500"
              trigger="hover"
              :content="`${start} ~ ${end}`"
            >
              <div
                slot="reference"
                class="index__requests-col"
              >
                <span class="index__requests-top">
                  최근 24시간
                </span>
                <span class="index__requests-value">
                  요청 {{ logs.length }}개
                </span>
              </div>
            </el-popover>
            <el-table
              :data="dataset.recent"
              style="width: 100%"
            >
              <el-table-column
                v-for="(item, idx) in fields.logs"
                :key="idx"
                :prop="item.prop"
                :label="item.label"
              />
            </el-table>
          </div>
          <pie-chart
            width="50%"
            :donut="true"
            :data="dataset.status"
            :colors="colors"
            :legend="{display:false}"
          />
        </el-row>
      </el-card>
    </template>
  </default-page>
</template>

<style lang="scss">
.index {

  &__row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__requests {
    width: 70%;
  }

  &__requests-col {
    display: flex;
    flex-direction: column;
  }

  &__requests-top {
    font-size: 2rem;
  }

  &__requests-value {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.5;
  }

  &__requests-period {
    font-size: 1rem;
  }
}
</style>

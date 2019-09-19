<script>
import DefaultPage from '../../defaults/DefaultPage.vue';

export default {
  components: {
    DefaultPage,
  },
  data() {
    return {
      loading: false,
      services: [],
    };
  },
  async created() {
    await this.getServiceKeys();
  },
  methods: {
    async getServiceKeys() {
      try {
        const { data } = await this.$api.get('/service');
        this.services = data.map(({
          id, name, route, proxy, address, timestamp,
        }) => ({
          id,
          name,
          route,
          proxy: proxy.toString(),
          address: address || '없음',
          date: this.$moment(timestamp).format('LLL'),
        }));
        this.loading = false;
      } catch (err) {
        console.error(err);
      }
    },
    onClickService(row) {
      this.$router.push({
        name: 'serviceKey',
        params: {
          serviceID: row.id,
        },
      });
    },
  },
};
</script>

<template>
  <default-page
    class="service-list"
    icon="el-icon-s-promotion"
    title="서비스 관리"
    desc="INU 서비스 리스트"
    active="2-1-1"
  >
    <template v-slot:main>
      <el-table
        v-loading="loading"
        :data="services"
        empty-text="데이터가 없습니다."
        @row-click="onClickService"
      >
        <el-table-column
          className="service-list__service-name"
          prop="name"
          label="서비스 이름"
        />
        <el-table-column prop="route" label="서비스 식별자" />
        <el-table-column prop="proxy" label="서비스 프록시" />
        <el-table-column prop="address" label="API 주소" />
        <el-table-column prop="date" label="생성일" />
      </el-table>
      <el-row class="service-list__buttons">
        <el-popover
          placement="top-start"
          title="새로운 서비스 생성하기"
          width="200"
          trigger="hover"
          content="(준비중) 서비스를 생성해 프로젝트를 편하게 관리하세요."
        >
          <el-button
            slot="reference"
            class="service-list__button"
            type="primary"
            icon="el-icon-plus"
            circle
          />
        </el-popover>
      </el-row>
    </template>
  </default-page>
</template>

<style lang="scss">
.service-list {

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

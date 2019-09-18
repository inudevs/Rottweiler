<script>
export default {
  data() {
    return {
      services: [],
    };
  },
  async created() {
    await this.getServices();
  },
  methods: {
    async getServices() {
      const { data } = await this.$api.get('/service');
      this.services = data.map(({ name, route, proxy, address, timestamp }) => ({
        name,
        route, 
        proxy: proxy.toString(),
        address: address || '없음',
        date: this.$moment(timestamp).format('LLL'),
      }))
    },
  },
};
</script>

<template>
  <el-container class="index">
    <el-aside width="200px">
      <div class="index__brand">
        <img
          class="index__logo"
          :src="require('../assets/inu-logo.png')"
        />
      </div>
      <el-menu :default-openeds="['1']" default-active="1-1">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>서비스</template>
          <el-menu-item-group title="서비스 관리">
            <el-menu-item index="1-1">서비스 목록</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="서비스 API 키">
            <el-menu-item index="2-1">API 키 목록</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="index__header">
        <h1 class="index__header-title">
          <i class="el-icon-s-promotion" /> 서비스 관리
        </h1>
        <p class="index__header-desc">INU 서비스 리스트</p>
      </el-header>

      <el-main>
        <el-table :data="services">
          <el-table-column
            className="index__service-name"
            prop="name"
            label="서비스 이름"
          />
          <el-table-column prop="route" label="서비스 식별자" />
          <el-table-column prop="proxy" label="서비스 프록시" />
          <el-table-column prop="address" label="API 주소" />
          <el-table-column prop="date" label="생성일" />
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss">
.index {
  height: 100%;

  i {
    color: #F4B81D;
  }

  .el-menu {
    height: 100%;
  }

  .el-header {
    height: unset !important;
    padding-top: 1.5rem;
    padding-bottom: 0.2rem;
    border-bottom: .5px dashed #F4B81D;
  }

  &__brand {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    width: 100px;
    margin-top: 1.2rem;
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

  .el-main {
    padding-top: 0;
  }

  &__service-name {
    font-weight: bold;
  }
}
</style>

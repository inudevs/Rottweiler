<script>
export default {
  props: {
    active: {
      type: String,
      default: '1',
    },
  },
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<template>
  <el-aside width="200px" class="submenu">
    <el-menu
      :default-openeds="['2', '3']"
      :default-active="active"
    >
      <router-link
        to="/"
        class="submenu__brand"
      >
        <img
          class="submenu__logo"
          :src="require('../../assets/inu-logo.png')"
        />
      </router-link>
      <el-menu-item
        @click="logout"
      >
        <i class="el-icon-switch-button" />로그아웃
      </el-menu-item>
      <el-menu-item
        index="1"
        @click="$router.push({ name: 'home' })"
      >
        <i class="el-icon-s-data" />대시보드
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-promotion" />서비스
        </template>
        <el-menu-item-group title="서비스 관리">
          <el-menu-item
            index="2-1-1"
            @click="$router.push({ name: 'service' })"
          >
            서비스 목록
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="서비스 API 키">
          <el-menu-item
            index="2-2-1"
            :disabled="active != '2-2-1'"
          >
            API 키 목록
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-user-solid" />사용자
        </template>
        <el-menu-item-group title="사용자 관리">
          <el-menu-item
            index="3-1-1"
            @click="$router.push({ name: 'user' })"
          >
            사용자 목록
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<style lang="scss">
.submenu {

  .el-menu {
    height: 100%;
    padding-top: 0;
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
}
</style>

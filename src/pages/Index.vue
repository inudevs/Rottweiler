<script>
import { mapState } from 'vuex';

export default {
  async created() {
    await this.getUserInfo();
  },
  data() {
    return {
      user: {},
      loaded: false,
    };
  },
  computed: {
    ...mapState({
      token: state => state.token,
      userID: state => state.id,
    }),
  },
  methods: {
    async getUserInfo() {
      try {
        const { data } = await this.$api.get('/user');
        this.loaded = true;
        this.user = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div class="index">
    <div
      v-if="loaded"
      class="index__wrap"
    >
      <jovian-profile :user=user />
      <div class="index__content">
        <div
          v-if="!user.inu"
          class="forbidden"
        >
          <span class="forbidden__title">INU 동아리원이 아닙니다.</span>
          <span class="forbidden__desc">관리자에게 연락하세요.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forbidden {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  &__title {
    color: #F4B81D;
    font-weight: bold;
    font-size: 1.5rem;
  }
}

.index {
  height: 100%;

  &__wrap {
    height: 100%;
  }
}
</style>

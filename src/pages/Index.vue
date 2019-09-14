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
    userType() {
      if (this.user.admin) return '관리자';
      if (this.user.inu) return 'INU 동아리원';
      return {
        dimigo: '디미고인',
        user: '일반 사용자',
      }[this.user.type];
    },
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
    logout() {
      this.$store.commit('logout');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<template>
  <div class="content">
    <div
      v-if="loaded"
      class="index"
    >
      <div class="index__user-card">
        <div class="index__profile">
          <img
            class="index__photo"
            :src="user.photo"
          />
          <div class="index__info">
            <span class="index__name">
              {{ user.name }}
              <span class="index__type">
                {{ userType }}
              </span>
              <button
                class="index__logout"
                @click="logout"
              >
                로그아웃
              </button>
            </span>
            <span class="index__email">
              {{ user.email }}
            </span>
            <span class="index__user-id">
              {{ user.id }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;
}

.index {
  height: calc(100% - 2rem);
  padding: 1rem 1.2rem;

  &__user-card {
    display: flex;
    flex-direction: column;
    width: fit-content;
    border-radius: 15px;
    padding: 0.8rem 1rem;
    box-shadow: 15px 19px 32px -18px rgba(21,19,19,.07);
    background-color: white;
  }

  &__profile {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__photo {
    width: 3rem;
    height: 3rem;
    margin-bottom: 10px;
    border: 1px solid #f3f3f3;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.8rem;
    box-shadow: 15px 19px 32px -18px rgba(21,19,19,.07);
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-size: 1.2rem;
  }

  &__type {
    font-size: 0.8rem;
  }

  &__email {
    font-size: 0.7rem;
  }

  &__user-id {
    color: #b1b1b1;
    font-size: 0.7rem;
  }

  &__logout {
    cursor: pointer;
    vertical-align: text-bottom;
    width: fit-content;
    border: 0;
    background-color: rgb(235, 235, 235);
    padding: 0.2rem 0.3rem;
  }
}
</style>

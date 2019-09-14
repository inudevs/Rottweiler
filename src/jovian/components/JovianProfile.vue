<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    userType() {
      // TODO: Dashboard, store user info
      if (this.user.admin) return '관리자';
      if (this.user.inu) return 'INU 동아리원';
      return {
        dimigo: '디미고인',
        user: '일반 사용자',
      }[this.user.type];
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
  <div class="profile">
    <div class="profile__wrap">
      <img
        class="profile__photo"
        :src="user.photo"
      />
      <div class="profile__info">
        <span class="profile__name">
          {{ user.name }}
          <span class="profile__type">
            {{ userType }}
          </span>
          <button
            class="profile__logout"
            @click="logout"
          >
            로그아웃
          </button>
        </span>
        <span class="profile__email">
          {{ user.email }}
        </span>
        <span class="profile__user-id">
          {{ user.id }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  width: fit-content;
  border-radius: 15px;
  padding-top: 1rem;
  padding-left: 1rem;
  // box-shadow: 15px 19px 32px -18px rgba(21,19,19,.07);
  background-color: white;

  &__wrap {
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
    vertical-align: text-top;
    width: fit-content;
    border: 0;
    border-radius: 5px;
    margin-right: 1rem;
    background-color: #F4B81D;
    color: white;
    padding: 0.2rem 0.3rem;
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
    border-radius: 3px;
    background-color: rgb(235, 235, 235);
    padding: 0.2rem 0.3rem;
  }
}
</style>

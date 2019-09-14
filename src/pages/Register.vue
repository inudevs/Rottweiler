<script>
import DefaultAuth from '../defaults/DefaultAuth.vue';

export default {
  name: 'Register',
  components: {
    DefaultAuth,
  },
  data() {
    return {
      tab: 0,
      user: {
        type: '',
        id: '',
        password: '',
      },
    };
  },
  computed: {
    userType() {
      return ['dimigo', 'user'][this.tab];
    },
  },
  methods: {
    async onClick() {
      if (!this.user.id || !this.user.password) {
        await this.$swal('에러!', '모든 입력란을 채워주세요!', 'error');
        return;
      }
      try {
        this.user.type = this.userType;
        await this.$api.post('/auth/join', {
          user: this.user,
        });
        this.$swal(
          '가입 완료!',
          (this.tab) ? '이제 로그인을 해주세요.' : '디미고 계정에 연결된 이메일로 로그인을 해주세요.',
          'success',
        );
        this.$router.push({ name: 'login' });
      } catch (error) {
        const { message } = error.response.data;
        await this.$swal('에러!', message, 'error');
      }
    },
  },
};
</script>

<template>
  <default-auth title="회원가입">
    <div class="register">
      <ul class="register__tabs">
        <li
          v-for="(item, key) in ['디미고 계정으로 회원가입', '일반 사용자 회원가입']"
          :key="key"
          :class="{ selected: key === tab }"
          @click="tab = key"
        >
          {{ item }}
        </li>
      </ul>
      <div
        v-if="!tab"
        class="register__content"
      >
        <p class="register__desc">
          기존 <strong>디미고 계정</strong>에 로그인해서<br />
          빠르게 INU 통합 계정을 만드세요!
        </p>
        <div class="register__form">
          <jovian-input
            class="register__input"
            v-model="user.id"
            placeholder="디미고 계정 아이디"
            :autofocus="true"
          />
          <jovian-input
            class="register__input"
            v-model="user.password"
            placeholder="디미고 계정 패스워드"
            type="password"
          />
          <jovian-button
            class="register__button"
            @click="onClick"
          >
            LOGIN
          </jovian-button>
        </div>
      </div>
      <div
        v-else
        class="register__content"
      >
        <p class="register__desc">
          준비중입니다.
        </p>
      </div>
    </div>
  </default-auth>
</template>

<style lang="scss" scoped>
.register {

  &__tabs {
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin: 0;
    padding: 0;

    li {
      cursor: pointer;
      padding: 0.8rem 1.2rem;
      transition: border-width 0.1s linear;
      user-select: none;
    }

    li.selected {
      color: #F4B81D;
      border-bottom: 0px solid #F4B81D;
      border-width: 3px;
    }
  }

  &__desc {
    margin-top: 1.5rem;
  }

  &__input,
  &__button {
    margin-top: 0.5rem;
  }
}
</style>

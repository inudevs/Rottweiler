<script>
import DefaultAuth from '../defaults/DefaultAuth.vue';

export default {
  name: 'Login',
  components: {
    DefaultAuth,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async onClick() {
      if (!this.form.email || !this.form.password) {
        await this.$swal('에러!', '모든 입력란을 채워주세요!', 'error');
        return;
      }
      try {
        await this.login();
      } catch (error) {
        const { status, data: { message } } = error.response;
        if (status === 404) {
          try {
            await this.joinByDimigo();
          } catch (err) {
            await this.$swal('에러!', '올바른 디미고 계정이 아닙니다.', 'error');
            return;
          }
          this.$swal('디미고 계정으로 가입했습니다!', '', 'success');
          await this.login();
          return;
        }
        await this.$swal('에러!', message, 'error');
      }
    },
    async login() {
      const { data } = await this.$api.post('/auth/login', this.form);
      this.$store.commit('login', data);
      this.$router.push('/');
      this.$router.go();
    },
    async joinByDimigo() {
      const { email, password } = this.form;
      await this.$api.post('/auth/join', {
        user: {
          type: 'dimigo',
          id: email,
          password,
        },
      });
    },
  },
};
</script>

<template>
  <default-auth title="로그인">
    <div class="login">
      <div class="login__form">
        <jovian-input
          class="login__input"
          v-model="form.email"
          placeholder="이메일 또는 디미고 계정 아이디"
          :autofocus="true"
        />
        <jovian-input
          class="login__input"
          v-model="form.password"
          placeholder="패스워드"
          type="password"
        />
        <jovian-button
          class="login__button"
          @click="onClick"
        >
          LOGIN
        </jovian-button>
      </div>
      <div class="login__options">
        <span @click="$router.push({ name: 'register' })">
          일반 사용자 회원가입
        </span>
      </div>
    </div>
  </default-auth>
</template>

<style lang="scss" scoped>
.login {

  &__input {
    margin-bottom: 0.5rem;
  }

  &__options {
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    font-size: 1.1rem;

    span {
      cursor: pointer;
      transition: all 0.2ms;
    }

    span:last-child {
      margin-top: 0.2rem;
    }

    span:hover {
      color: #F4B81D;
    }
  }
}
</style>

<script>
export default {
  name: 'Login',
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
      if (!this.form.email || !this.form.password) return;
      try {
        const { data } = await this.$api.post('/auth/login', this.form);
        this.$store.commit('login', data.token);
        this.$store.commit('saveID', data.id);
        this.$router.push('/');
      } catch (error) {
        const { message } = error.response.data;
        await this.$swal('에러!', message, 'error');
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="login">
      <div class="login__header">
        <img
          class="login__logo"
          :src="require('../assets/inu-logo.png')"
        />
        <h1 class="login__title">
          로그인
        </h1>
        <span>INU 인트라넷</span>
      </div>
      <div class="login__form">
        <input
          class="login__input"
          placeholder="이메일"
          v-model="form.email"
          autocomplete="new-username"
          autofocus
        />
        <input
          class="login__input"
          placeholder="패스워드"
          type="password"
          v-model="form.password"
          autocomplete="new-password"
        />
        <button
          class="login__button"
          @click="onClick"
        >
        LOGIN
        </button>
      </div>
      <div class="login__options">
        <span>디미고 계정으로 로그인</span>
        <span @click="$router.push({ name: 'register' })">
          회원가입
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}

.login {
  width: 500px;
  text-align: center;
  padding-top: 2.5rem;

  &__header {
    padding-bottom: 1.8rem;
  }

  &__logo {
    width: 120px;
    height: 120%;
  }

  &__title {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  &__input {
    box-sizing: border-box;
    margin-bottom: 0.5rem;
    width: 100%;
    font-size: 1.2rem;
    padding: 0.6rem 0.8rem;
    border: 0;
    border-radius: 8px;
    // background-color: #eeeeee;
    border: 2px solid #F4B81D;
    color: black;

    &::placeholder {
      // color: #F4B81D;
    }
  }

  &__button {
    cursor: pointer;
    width: 100%;
    font-size: 1.2rem;
    padding: 0.6rem 0.8rem;
    border: 0;
    border-radius: 8px;
    color: white;
    background-color: #F4B81D;
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

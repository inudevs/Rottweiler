<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        id: '',
        password: '',
      },
    };
  },
  methods: {
    async onClick() {
      if (!this.form.id || !this.form.password) return;
      try {
        const { data } = await this.$api.post('/auth/login', this.form);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div class="login">
    <h1 class="login__title">
      <span class="login__title login__title-top">시바</span>
      <span class="login__title login__title-center">염탐하지</span>
      <span class="login__title login__title-bottom">마라</span>
      <span class="login__title login__title-desc">
        INU 프로젝트 관리 솔루션, 로트바일러
      </span>
    </h1>
    <div class="login__form">
      <input
        class="login__input"
        placeholder="아… 이디"
        v-model="form.id"
      />
      <input
        class="login__input"
        placeholder="패스워드"
        type="password"
        v-model="form.password"
      />
      <button class="login__button">
        틀리면 물린다
      </button>
    </div>
    <img
      class="login__illust"
      :src="require('../assets/dog.png')"
    />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'yg-jalnan';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.login {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #FFFCED;

  &__title {
    font-family: 'yg-jalnan';
    font-size: 6rem;
    line-height: 1.1;
    margin-left: 1.5rem;

    &-top {
      display: block;
      -webkit-text-stroke-width: 4px;
      -webkit-text-stroke-color: #000;
      color: transparent;
    }

    &-center {
      display: block;
    }

    &-bottom {
      display: block;
      -webkit-text-stroke-width: 4px;
      -webkit-text-stroke-color: #000;
      color: transparent;
    }

    &-desc {
      display: block;
      margin-left: 1.5rem;
      font-size: 1.5rem;
      color: #FAAC30;
      -webkit-text-stroke-width: 0;
      line-height: unset;
    }
  }

  &__illust {
    width: 50%;
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &__form {
    width: 40%;
    margin-left: 3rem;
  }

  &__input {
    width: 100%;
    box-sizing: border-box;
    display: block;
    font-size: 2rem;
    font-family: 'Spoqa Han Sans';
    font-weight: 300;
    padding: 0.7rem;
    border: 1px solid #A7A7A7;
    border-radius: 10px;
    margin-bottom: 0.5rem;

    &::placeholder {
      color: #A7A7A7;
    }
  }

  &__button {
    cursor: pointer;
    color: white;
    width: 100%;
    padding: 0.5rem;
    display: block;
    font-size: 2rem;
    font-size: 2rem;
    font-family: 'Spoqa Han Sans';
    font-weight: 300;
    background: linear-gradient(to right, #FECC6F, #FAAC30);
    border: 0;
    border-radius: 10px;
  }
}
</style>

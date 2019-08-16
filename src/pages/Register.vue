<script>
export default {
  name: 'Register',
  data() {
    return {
      form: {
        id: '',
        password: '',
      },
    };
  },
};
</script>

<template>
  <div class="register">
    <h1 class="register__title">
      <span class="register__title register__title-top">시바</span>
      <span class="register__title register__title-center">이누만</span>
      <span class="register__title register__title-bottom">와라</span>
      <span class="register__title register__title-desc">
        INU의 모든 프로젝트를,<br />한눈에.
      </span>
    </h1>
    <img
      class="register__illust"
      :src="require('../assets/dog-ball.png')"
    />
    <div class="register__form">
      <input
        class="register__input"
        v-model="form.id"
      />
      <input
        class="register__input"
        v-model="form.password"
      />
      <button>회원가입 신청</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: fixed;

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
    width: 30%;
  }
}
</style>

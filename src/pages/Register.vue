<script>
export default {
  name: 'Register',
  data() {
    return {
      next: {
        password: false,
        submit: false,
      },
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async onClick() {
      try {
        await this.$api.post('/auth/register', this.form);
        this.$swal('가입 완료!', '이제 로그인을 해주세요.', 'success');
        this.$router.push({ name: 'login' });
      } catch (error) {
        console.error(error);
        await this.$swal('에러!', '회원 가입에 실패했습니다.', 'error');
      }
    },
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
    <div class="register__form">
      <span class="register__help">
        사용자 이름은 지금 사용하고 계시는 <strong>깃허브 계정</strong>과 같은 걸 사용해주세요!
      </span>
      <input
        class="register__input"
        placeholder="멋진 사용자 이름"
        v-model="form.username"
        @keypress="next.password = true"
        autocomplete="new-username"
        autofocus
      />
      <div v-if="next.password">
        <span class="register__help">
          여러분의 <strong>소중한 패스워드</strong>는 scrypt로 해싱한 뒤에 저장할 거예요!
        </span>
        <input
          class="register__input"
          placeholder="비밀스러운 패스워드"
          v-model="form.password"
          @keypress="next.submit = true"
          autocomplete="new-password"
        />
      </div>
      <button
        v-if="next.submit"
        class="register__button"
      >
        회원가입 신청
      </button>
    </div>
    <img
      class="register__illust"
      :src="require('../assets/dog-ball.png')"
    />
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
    width: 80%;
    z-index: -1;
    position: absolute;
    right: -250px;
    bottom: 0;
  }

  &__form {
    width: 45%;
    margin-left: 3rem;
  }

  &__help {
    font-size: 1.2rem;
    margin-bottom: 1rem;
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
    margin-top: 0.5rem;
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

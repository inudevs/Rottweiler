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
    </h1>
    <div class="register__form">
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
  </div>
</template>

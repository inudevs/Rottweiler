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
      <hr />
      <div
        v-if="false"
        class="forbidden"
      >
        <span class="forbidden__title">INU 동아리원이 아닙니다.</span>
        <span class="forbidden__desc">관리자에게 연락하세요.</span>
      </div>
      <div
        v-else
        class="index__content"
      >
        <div class="index__form">
          <h1 class="index__form-title">
            <img
              class="index__icon"
              :src="require('../assets/icons/pencil.svg')"
            /> 진행사항 공유하기
          </h1>
          <textarea
            class="index__form-textarea"
            placeholder="오늘 한 작업에 대한 간단한 요약"
          />
          <div class="index__form-toolbar">
            <div class="index__form-select">
              <span>프로젝트</span>
              <select>
                <option>래브라도</option>
              </select>
            </div>
            <jovian-button
              class="index__form-button"
            >
              글쓰기
            </jovian-button>
          </div>
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
    font-weight: bold;
    font-size: 1.5rem;
  }
}

.index {
  height: 100%;

  &__icon {
    height: 1rem;
  }

  &__wrap {
    height: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }

  &__form {
    margin: auto;
    width: 60%;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #f3f3f3;

    @media (max-width: 500px) {
      width: 80%;
    }
  }

  &__form-title {
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }

  &__form-toolbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  &__form-select {
    font-size: 1rem;

    span {
      vertical-align: center;
      margin-right: 0.5rem;
    }

    select {
      font-size: 1rem;
      box-sizing: border-box;
      vertical-align: center;
    }
  }

  &__form-textarea {
    width: 100%;
    background-color: #f3f3f3;
    border: 0;
    border-radius: 20px;
    box-sizing: border-box;
    resize: none;
    font-size: 1rem;
    padding: 1.2rem 1.5rem;
  }

  &__form-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 1rem;
    width: fit-content;
  }
}
</style>

<script>
export default {
  name: 'Board',
  props: {
    length: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      forms: {
        new: false,
        type: 'info',
        title: '',
        content: '',
        repoOwner: 'inudevs',
        repoName: '',
      },
    };
  },
};
</script>

<template>
  <div class="board">
    <span class="board__title">
      <span class="board__number">{{ length }}</span>
      {{ title }}
      <span class="board__new">
        <i
          class="fas fa-plus"
          @click="forms.new = !(forms.new)"
        />
      </span>
    </span>
    <div
      class="board__form"
      v-if="forms.new"
    >
      <div class="board__select board__field">
        <select>
          <option>정보</option>
          <option>체크리스트</option>
          <option>깃허브</option>
        </select>
      </div>
      <template>
        <div
          class="board__repo board__field"
        >
          <span>저장소</span>
          <input v-model="forms.repoOwner" />
          &sol;
          <input v-model="forms.repoName" />
        </div>
      </template>
      <input
        class="board__input board__field"
        placeholder="제목"
      />
      <textarea
        class="board__textarea board__field"
        placeholder="내용"
      />
      <div class="board__buttons board__field">
        <button>
          카드 추가
        </button>
        <button
          @click="forms.new = false"
        >
          취소
        </button>
      </div>
    </div>
    <div class="board__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
textarea:focus,
input:focus{
  outline: none;
}

.board {
  display: inline-block;
  background-color: #f1f3f5;
  width: 272px;
  margin-left: 0.5rem;
  margin-right: 0.2rem;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding-top: 0.8rem;
  padding-bottom: 0.3rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;

  &__title {
    color: #343a40;
    font-size: 1.2rem;
  }

  &__number {
    color: #343a40;
    background-color: #ced4da;
    padding: 1px 3px;
    border-radius: 5px;
    font-size: 1.1rem;
  }

  &__new {
    color: #ced4da;
    float: right;

    &:hover,
    &:focus {
      color: #adb5bd;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 0.5rem;
  }

  &__field:not(:first-child) {
    margin-top: 0.3rem;
  }

  &__select {
    width: 95%;
    box-sizing: border-box;
    padding-top: .3rem;
    padding-bottom: .3rem;
    padding-left: .5rem;
    padding-right: .5rem;
    border: .5px solid #a4a4a4;
    background-color: #fff;
    display: inline-block;
    background-image: url("../assets/arrow-down.svg");
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: .5rem;

    select {
      width: 100%;
      background: transparent;
      border: 0;
      border-radius: 0;
      -webkit-appearance: none;
      color: #a4a4a4;
      font-size: 0.9rem;
      line-height: 1.47;
    }
  }

  &__input,
  &__textarea {
    width: 95%;
    box-sizing: border-box;
    font-size: 0.9rem;
    line-height: 1.47;
    padding-top: .3rem;
    padding-bottom: .3rem;
    padding-left: .5rem;
    padding-right: .5rem;
    border: .5px solid #a4a4a4;
  }

  &__buttons {
    width: 95%;
    display: flex;
    flex-direction: row;

    button {
      width: 100%;
      justify-content: center;
      display: flex;
      font-size: 0.8rem;
      line-height: 1.47;
      border: .5px solid #a4a4a4;
    }

    button:first-child {
      margin-right: 0.3rem;
      background-color: #495057;
      color: white;
    }
  }

  &__content {
    margin-top: 0.3rem;
    padding: 0.2rem 0.2rem;
  }
}
</style>

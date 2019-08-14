<script>
import Board from '../components/Board.vue';
import NoticeCard from '../components/NoticeCard.vue';
import CheckCard from '../components/CheckCard.vue';

export default {
  name: 'Index',
  components: {
    Board,
    NoticeCard,
    CheckCard,
  },
  data() {
    return {
      testCards: [
        {
          type: 'info',
          title: '개발',
          excerpt: '일일일',
          content: '어쩌고',
        },
        {
          type: 'check',
          title: '개발',
          excerpt: '일일일',
          content: '어쩌고',
          done: false,
        },
        {
          type: 'check',
          title: '개발',
          excerpt: '일일일',
          content: '어쩌고',
          done: true,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="index">
    <div class="index__head">
      <h1 class="index__title">
        INU 2019
        <span class="index__comment">이누는 오늘도 떡상 중!</span>
      </h1>
    </div>
    <div class="index__content">
      <div class="index__canvas">
        <board
          title="디미09"
          :length="3"
        >
          <template
            v-for="(card, idx) in testCards"
          >
            <notice-card
              v-if="card.type === 'info'"
              :card="card"
              :key="idx"
            />
            <check-card
              v-else-if="card.type === 'check'"
              :card="card"
              :key="idx"
            />
          </template>
        </board>
        <board title="래브라도" />
        <board title="디미청원" />
        <board title="인원체크" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;

  &__head {
    margin-top: 2rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }

  &__title {
    color: #343a40;
    font-size: 1.5rem;
    margin: 0;
  }

  &__comment {
    color: #868e96;
    font-size: 1rem;
    font-weight: normal;
    margin-left: 0.3rem;
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0.8rem 0.5rem;
    user-select: none;
    white-space: nowrap;
  }
}
</style>

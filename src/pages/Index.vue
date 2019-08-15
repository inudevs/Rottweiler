<script>
import Board from '../components/Board.vue';
import NoticeCard from '../components/NoticeCard.vue';
import CheckCard from '../components/CheckCard.vue';
import GithubCard from '../components/GithubCard.vue';

export default {
  name: 'Index',
  components: {
    Board,
    NoticeCard,
    CheckCard,
    GithubCard,
  },
  data() {
    return {
      testCards: [
        {
          type: 'info',
          title: '8월까지 마무리',
          excerpt: '8월 말까지는 꼭 끝내야 합니다.',
        },
        {
          type: 'check',
          title: '프론트엔드 개발',
          excerpt: 'Vue.js와 Vuex로 예쁘게 완성하기',
          done: false,
        },
        {
          type: 'check',
          title: '백엔드 개발',
          excerpt: 'Sanic으로 만드는 비동기 API 서버',
          done: true,
        },
        {
          type: 'check',
          title: '프론트엔드 개발',
          excerpt: 'Vue.js와 Vuex로 예쁘게 완성하기',
          done: false,
        },
        {
          type: 'check',
          title: '백엔드 개발',
          excerpt: 'Sanic으로 만드는 비동기 API 서버',
          done: true,
        }, {
          type: 'check',
          title: '프론트엔드 개발',
          excerpt: 'Vue.js와 Vuex로 예쁘게 완성하기',
          done: false,
        },
        {
          type: 'check',
          title: '백엔드 개발',
          excerpt: 'Sanic으로 만드는 비동기 API 서버',
          done: true,
        }, {
          type: 'check',
          title: '프론트엔드 개발',
          excerpt: 'Vue.js와 Vuex로 예쁘게 완성하기',
          done: false,
        },
        {
          type: 'check',
          title: '백엔드 개발',
          excerpt: 'Sanic으로 만드는 비동기 API 서버',
          done: true,
        },
        {
          type: 'github',
          repo: 'inudevs/dimigo-petitions-back',
          issue: 14,
        },
        {
          type: 'github',
          repo: 'inudevs/dimigo-petitions-back',
          issue: 1,
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
          title="디미청원"
          :length="testCards.length"
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
            <github-card
              v-else-if="card.type === 'github'"
              :card="card"
              :key="idx"
            />
          </template>
        </board>
        <board title="래브라도" />
        <board title="디미09" />
        <board title="인원체크" />
        <board title="인원체크" />
        <board title="인원체크" />
        <board title="인원체크" />
      </div>
    </div>
    <img
      class="index__illust"
      :src="require('../assets/dog-sat.png')"
    />
  </div>
</template>

<style lang="scss">
html {
  background-color: #FFFCED;
  overflow-x: hidden;
}

.index {
  height: 100%;
  width: 100%;
  padding-left: 2rem;
  padding-right: 1rem;

  &__head {
    padding-top: 2rem;
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
    height: fit-content;
  }

  &__canvas {
    height: fit-content;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    padding: 0.8rem 0.5rem;
    padding-right: 5rem;
    user-select: none;
    white-space: nowrap;

    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }

  &__illust {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 50%;
    z-index: -1;
  }
}
</style>

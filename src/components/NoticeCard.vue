<script>
export default {
  name: 'NoticeCard',
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async onClick() {
      console.log(true);
    },
  },
};
</script>

<template>
  <div
    class="card"
    @click="onClick"
  >
    <div class="card__head">
      <span
        class="card__title"
      >
        <i class="fas fa-exclamation-circle" />
        {{ card.title }}
      </span>
    </div>
    <div class="card__content">
      {{ card.content }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fa-exclamation-circle {
  color: #0ca678;
}

.card {
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;

  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }

  &__title {
    font-size: 1.1rem;
    color: #0ca678;
  }

  &__title i {
    margin-right: 0.1rem;
  }

  &__content {
    font-size: 0.8rem;
    line-height: 1.5;
  }
}
</style>

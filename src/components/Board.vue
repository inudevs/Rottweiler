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
};
</script>

<template>
  <div class="board">
    <span class="board__title">
      <span class="board__number">{{ length }}</span>
      {{ title }}
    </span>
    <div class="board__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  padding: 0.3rem;
  padding-top: 0.8rem;

  &__title {
    color: #343a40;
    font-size: 1.2rem;
    margin-left: 0.3rem;
  }

  &__number {
    color: #343a40;
    background-color: #ced4da;
    padding: 1px 3px;
    border-radius: 5px;
    font-size: 1.1rem;
  }

  &__content {
    margin-top: 0.3rem;
    padding: 0.2rem 0.2rem;
  }
}
</style>

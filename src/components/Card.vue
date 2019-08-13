<script>
export default {
  name: 'Card',
  props: {
    title: String,
    content: String,
    type: {
      type: String,
      default: 'info',
    },
  },
  computed: {
    iconClass() {
      return {
        info: 'fas fa-exclamation-circle',
        todo: 'far fa-square',
        done: 'fas fa-check-square',
      }[this.type];
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card__head">
      <span
        :class="`card__title ${type}`"
      >
        <i :class="{ [iconClass]: true }" />
        {{ title }}
      </span>
    </div>
    <div class="card__content">
      {{ content }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fa-exclamation-circle {
  color: #0ca678;
}

.fa-square,
.fa-check-square {
  color: #1971c2;
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

    &.info {
      color: #0ca678;
    }

    &.todo,
    &.done {
      color: #1971c2;
    }
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

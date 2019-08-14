<script>
export default {
  name: 'Modal',
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div
      v-show="opened"
      class="modal__overlay"
      @click.stop="close"
    >
      <div
        class="modal"
        @click.stop
      >
        <i
          class="fas fa-times"
          @click.stop="close"
        />
        <slot />
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.25s ease-in-out;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

.modal {
  position: relative;
  max-width: 700px;
  box-sizing: border-box;
  padding: 24px;
  margin: 5vh auto;
  border-radius: 6px;
  box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.5);
  background-color: white;

  &__overlay {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    background: rgba(#151313, 0.7);
    overflow-y: auto;
  }

  .fa-times {
    cursor: pointer;
    float: right;
    opacity: 0.3;
  }
}
</style>

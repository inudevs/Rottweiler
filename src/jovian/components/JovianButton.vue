<script>
export default {
  methods: {
    emitClick() {
      if (this.disabled) return;
      this.$emit('click');
    },
  },
};
</script>

<template>
  <button
    @click="emitClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  cursor: pointer;
  width: 100%;
  font-size: 1.2rem;
  padding: 0.6rem 0.8rem;
  border: 0;
  border-radius: 8px;
  color: white;
  background-color: #F4B81D;
  user-select: none;
}
</style>

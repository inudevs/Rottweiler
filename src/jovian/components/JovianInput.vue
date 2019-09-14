<script>
export default {
  props: {
    autocomplete: {
      type: String,
      default: '',
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputValue: null,
    };
  },
  watch: {
    value(val) {
      this.inputValue = val;
    },
    inputValue(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<template>
  <input
    v-model="inputValue"
    :type="type"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    :autofocus="autofocus"
  />
</template>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
  width: 100%;
  font-size: 1.2rem;
  padding: 0.6rem 0.8rem;
  border: 0;
  border-radius: 8px;
  border: 2px solid #F4B81D;
  color: black;
}
</style>

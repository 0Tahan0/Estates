<template>
  <button
    @click="handelClick($event)"
    :disabled="disabled"
    :class="customizeButtonStatus"
    class="text-white bg-dark shadow-md shadow-black/20 px-1.5 py-2 capitalize font-medium text-xs md:text-sm select-none transition-all duration-300"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  emits: ["click"],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    customizeButtonStatus() {
      if (this.disabled) {
        return "bg-stone-500 cursor-not-allowed text-opacity-70";
      }
      // normal mode
      return "hover:bg-stone-500 active:scale-95 active:bg-lightBlue ";
    },
  },
  methods: {
    handelClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<template>
  <button
    @click="handelClick($event)"
    :disabled="disabled"
    :class="customizeButtonStatus"
    class="shadow-md shadow-black/20 px-2 py-2.5 capitalize font-medium text-xs select-none transition-all duration-300"
    :style="{ borderRadius: Rounded }"
  >
    <slot></slot>
  </button>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  emits: ["click"],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["Rounded"]),
    customizeButtonStatus() {
      if (this.disabled)
        return "bg-stone-500 cursor-not-allowed text-opacity-70";
      else if (this.active) return "   dark:bg-darkEl";

      // normal mode
      return " dark:text-white text-dark bg-lightBt dark:bg-dark md:hover:bg-stone-300  md:dark:hover:bg-stone-500 active:bg-inherit active:text-inherit active:after:hidden   ";
    },
  },
  methods: {
    handelClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

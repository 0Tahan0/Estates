<template>
  <div
    class="capitalize select-none text-dark dark:text-white"
    :style="{ textAlign: align }"
  >
    <p class="text-base md:lg lg:text-2xl font-bold" :class="titleClass">
      <span :style="`font-size : ${customizfontSize}`">
        <slot>{{ title }}</slot>
      </span>
    </p>
    <p
      v-if="smallTitle"
      class="text-xs font-medium mt-2 md:text-sm text-gray-700 dark:text-gray-300"
    >
      {{ smallTitle }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    smallTitle: {
      type: String,
    },
    align: {
      type: String,
      default: "start",
    },
    size: {
      type: String,
      default: "md",
    },
    titleClass: {
      type: String,
      defailt: "",
    },
  },
  computed: {
    customizfontSize() {
      let _size = 0;
      switch (this.size) {
        case "xs":
          _size = 10;
          break;
        case "sm":
          _size = 12;
          break;
        case "md":
          _size = 16;
          break;
        case "lg":
          _size = 18;
          break;
        case "xl":
          _size = 22;
          break;
      }
      return _size + "px";
    },
  },
};
</script>

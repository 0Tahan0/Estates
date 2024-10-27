<template>
  <div class="capitalize select-none" :style="{ textAlign: align }">
    <p
      class="text-dark dark:text-white text-base md:lg lg:text-2xl font-bold"
    >
      <span :style="`font-size : ${customizfontSize}`">
        <slot>{{ title }}</slot>
      </span>
    </p>
    <p
      v-if="smallTitle"
      class="text-xs md:text-sm text-gray-500 dark:text-gray-200"
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

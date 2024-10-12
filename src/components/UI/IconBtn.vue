<template>
  <button
    :tooltip="tooltip"
    @click="handelClick($event)"
    class="rounded-full transition-shadow duration-300 hover:ring sm w-6 max-w-6 h-6 max-h-6"
  >
    <Icon :icon="icon" class="w-full h-full" />
  </button>
</template>

<script>
export default {
  emits: ["click"],
  props: {
    icon: {
      type: String,
      required: true,
    },
    tooltip: {
      type: String,
      default: null,
    },
  },
  methods: {
    handelClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

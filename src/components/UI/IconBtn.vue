<template>
  <button
    :tooltip="tooltip + ''"
    @click="handelClick($event)"
    class="grid place-items-center text-base overflow-hidden transition-shadow duration-300 active:ring-1 ring-darkEl md:hover:ring w-7 max-w-7 h-7 max-h-7"
   
  >
    <Icon :icon="icon" />
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
      default: "",
    },
  },

  methods: {
    handelClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

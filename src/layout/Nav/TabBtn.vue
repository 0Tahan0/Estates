import { RouterLink } from 'vue-router';
<template>
  <router-link
    @click="handelClick($event)"
    active-class="text-mainColor  before:bg-mainColor dark:bg-darkEl  "
    class="p-2.5 capitalize md:min-w-24  text-center   before:transition-all transition-all relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-1"
    :to="path"
    ><slot> {{ tabName }}</slot>
  </router-link>
</template>
<script>
export default {
  props: ["path", "tabName"],
  emits: ["click"],
  methods: {
    handelClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<template>
  <div
    @click="$emit('click', $event)"
    class="dark:bg-darkEl bg-lightEl dark:text-white text-dark "
    :style="{ borderRadius: Rounded }"
  >
  
    <slot></slot>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["Rounded"]),
  },
};
</script>

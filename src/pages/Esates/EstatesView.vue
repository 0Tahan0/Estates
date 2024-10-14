<template>
  <PageSplitter>
    <EstateMap />

    <Footer />
  </PageSplitter>
</template>
<script>
import EstateMap from "./EstateMap.vue";
export default {
  components: {
    EstateMap,
  },
};
</script>

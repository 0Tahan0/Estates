<template>
  <div

    class="space-y-5 pb-10 h-[70dvh] "
  >
    <Map
      :location="[28.9783589, 41.0082376]"
      :zoom="10"
      :points="points"
      :control="true"
      @add="console.log($event)"
      @delete="console.log($event)"
      @click="console.log($event)"
    />
  </div>
</template>
<script>
import Map from "../../components/UI/Map.vue";
export default {
  components: {
    Map,
  },
  data() {
    return {
      placeName: "",
      points: [
        {
          location: [28.9783589, 41.0082376],
          name: "istanbul",
        },
        {
          location: [29.9783589, 41.0082376],
          name: "istanbul22222",
        },
      ],
    };
  },
};
</script>

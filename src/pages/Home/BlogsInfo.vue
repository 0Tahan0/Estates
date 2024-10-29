<template>
  <div class="bg-mainColor">
    <Container class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <button
        v-for="(item, ind) in info"
        :key="ind"
        class="flex flex-col items-center justify-center gap-5 p-3"
        @click="handelChangeRoute()"
      >
        <Icon :icon="item.icon" class="text-white text-5xl" />
        <span class="text-xl font-bold text-slate-900/25">icon</span>
        <p class="text-darkBlue text-xs md:text-base font-medium">
          {{ item.title }}
        </p>
      </button>
    </Container>
  </div>
</template>
<script>
export default {
  computed: {
    info() {
      return [
        {
          title: "title",
          icon: "fa-solid fa-user",
        },
        {
          title: "title",
          icon: "fa-solid fa-sheald",
        },
        {
          title: "title",
          icon: "fa-solid fa-building",
        },
        {
          title: "title",
          icon: "fa-solid fa-plane",
        },
        {
          title: "title",
          icon: "fa-solid fa-user",
        },
        {
          title: "title",
          icon: "fa-solid fa-sheald",
        },
        {
          title: "title",
          icon: "fa-solid fa-building",
        },
        {
          title: "title",
          icon: "fa-solid fa-plane",
        },
      ];
    },
  },
  methods: {
    handelChangeRoute() {},
  },
};
</script>

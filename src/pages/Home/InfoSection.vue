<template>
  <div class="bg-lightBlue">
    <Container class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <div
        v-for="(i, ind) in info"
        :key="ind"
        class="flex flex-col items-center justify-center gap-5 p-3"
      >
        <Icon :icon="i.icon" class="text-white text-5xl" />
        <span class="text-xl font-bold text-slate-900/25">{{ i.count }}</span>
        <p class="text-darkBlue text-xs md:text-base font-medium">
          {{ i.title }}
        </p>
      </div>
    </Container>
  </div>
</template>
<script>
export default {
  computed: {
    info() {
      return [
        {
          icon: ["far", "building"],
          count: 385,
          title: this.$t("ui.OurProjects"),
        },
        {
          icon: ["far", "user"],
          count: 45,
          title: this.$t("ui.ProfessionalAgents"),
        },
        {
          icon: ["far", "handshake"],
          count: 235,
          title: this.$t("ui.SuccessfulDeals"),
        },
        {
          icon: ["far", "face-smile-beam"],
          count: 496,
          title: this.$t("ui.HappyCustomers"),
        },
      ];
    },
  },
};
</script>

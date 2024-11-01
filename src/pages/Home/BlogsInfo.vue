<template>
  <WrapperEl>
    <Container class="gap-5 flex flex-wrap items-center justify-evenly py-5">
      <button
        v-for="item in info"
        :key="item.id"
        class="flex flex-col items-center justify-center gap-5 group basis-[150px]"
        @click="handelChangeRoute(item.id)"
      >
        <Icon
          :icon="item.icon"
          class="md:text-4xl text-3xl group-hover:text-mainColor"
        />
        <Title size="sm" :title="item.title" />
      </button>
    </Container>
  </WrapperEl>
</template>
<script>

export default {

  computed: {
    info() {
      return [
        {
          title: this.$t("ui.InsuranceServices"),
          icon: "fa-solid fa-user-shield",
          id: "InsuranceServices",
        },
        {
          title: this.$t("Blogs.ObtainingCitizenship.title"),
          icon: "fa-solid fa-address-card",
          id: "ObtainingCitizenship",
        },
        {
          title: this.$t("ui.TurkishResidence"),
          icon: "fa-solid fa-passport",
          id: "TurkishResidence",
        },
        {
          title: this.$t("ui.WorkPermit"),
          icon: "fa-solid fa-briefcase",
          id: "WorkPermit",
        },
        {
          title: this.$t("ui.CompaniesFormation"),
          icon: "fa-solid fa-chart-column",
          id: "CompaniesFormation",
        },
        {
          title: this.$t("ui.StudentServices"),
          icon: "fa-solid fa-graduation-cap",
          id: "StudentServices",
        },
        {
          title: this.$t("ui.RealEstateService"),
          icon: "fa-solid fa-building",
          id: "RealEstateService",
        },
      ];
    },
  },
  methods: {
    handelChangeRoute(id) {
      this.$router.push({
        name: id,
        
      });
    },
  },
};
</script>

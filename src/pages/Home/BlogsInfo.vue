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

        <Title size="sm" :title="$t(`Blogs.${item.id}.name`)" />
      </button>
    </Container>
  </WrapperEl>
</template>
<script>

export default {
  computed: {
    info() {
      return [
        // {
        //   icon: "fa-solid fa-user-shield",
        //   id: "InsuranceServices",
        // },
        {
          icon: "fa-solid fa-address-card",
          id: "ObtainingCitizenship",
        },
        // {
        //   icon: "fa-solid fa-passport",
        //   id: "TurkishResidence",        // },
        {
          icon: "fa-solid fa-briefcase",
          id: "WorkPermit",
        },
        {
          icon: "fa-solid fa-chart-column",
          id: "CompaniesFormation",
        },
        {
          icon: "fa-solid fa-graduation-cap",
          id: "StudentServices",
        },
        // {
        //   icon: "fa-solid fa-building",
        //   id: "RealEstateService",
        // },
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

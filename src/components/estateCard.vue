<template>
  <WrapperEl
    class="shadow-md shadow-black/35 flex flex-col min-h-80 min-w-60 select-none"
  >
    <div class="flex-grow relative">
      <span
        class="absolute top-2 left-2 p-1 text-xs capitalize font-bold text-white"
        :style="`background: ${getStatus.color}`"
      >
        {{ getStatus.title }}
      </span>
      <img
        draggable="false"
        :src="project.image"
        alt="project"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="px-3 text-sm flex-grow">
      <div class="border-b mt-3 pb-3">
        <p>{{ project.locationNumber }}</p>
        <div
          class="flex items-center gap-2 cursor-pointer hover:text-lightBlue w-fit text-gray-500 dark:text-gray-300"
        >
          <p>{{ project.location }}</p>
          <Icon :icon="['fas', 'location-dot']" />
        </div>
      </div>
      <div class="mt-3">
        <p class="px-3 font-bold text-sm text-darkBlue">
          <Title
            class="flex items-center gap-3"
            size="sm"
            :title="$t('ui.Features')"
            :smallTitle="project.properties.length + ''"
          />
        </p>
        <div class="mt-2 text-xs text-gray-500 max-h-28 overflow-auto">
          <div
            class="flex px-3 items-center justify-between py-2 border-b"
            v-for="prop in project.properties"
            :key="prop"
          >
            <span>{{ prop.title }}</span>
            <span>{{ prop.value }}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between p-3">
        <Button>{{ $t("ui.Details") }}</Button>
        <img src="../assets//images/icon.png" alt="logo" class="w-10" />
      </div>
    </div>
  </WrapperEl>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
  computed: {
    getStatus() {
      return this.project.projectStatus === 1
        ? { title: this.$t("ui.ForRent"), color: "#55f" }
        : this.project.projectStatus === 2
        ? { title: this.$t("ui.UnderConstruction"), color: "#666" }
        : { title: this.$t("ui.ForSale"), color: "#5f5" };
    },
  },
};
</script>

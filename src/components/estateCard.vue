<template>
  <WrapperEl class="shadow-md max-h-80 md:max-h-[30rem]">
    <div class="grid grid-cols-12 h-full grid-rows-12">
      <!-- situation (absolute box) -->

      <!-- img box -->
      <div
        class="col-span-6 md:col-span-12 md:row-span-6 row-span-full group relative"
      >
        <div
          class="absolute top-0 flex items-center justify-between w-full p-2"
        >
          <span
            class="capitalize text-gray-100 p-0.5 text-xs"
            :style="{
              backgroundColor: getSituation.color,
            }"
          >
            {{ getSituation.title }}
          </span>
          <ContextMenu>
            <div class="grid">
              <Button class="flex items-center justify-between gap-2"
                ><p>share</p>
                <Icon icon="fa-solid fa-share"
              /></Button>
              <Button class="flex items-center justify-between gap-2"
                ><p>details</p>
                <Icon icon="fa-solid fa-circle-info"
              /></Button>
            </div>
          </ContextMenu>
        </div>
        <div class="absolute bottom-0 m-2 flex items-center gap-2">
          <IconBtn
            v-if="item?.attachments?.length > 0"
            icon="fa-regular fa-image"
            class="text-gray-300 bg-black bg-opacity-25"
          />
        </div>

        <img
          :draggable="false"
          :src="item?.attachments ? item?.attachments[0] : ''"
          :alt="item?.title || 'no photo'"
          class="w-full h-full object-cover select-none"
        />
      </div>
      <!-- content box -->
      <div
        class="col-span-6 flex flex-col md:col-span-12 p-2 md:p-4 md:row-span-6 row-span-full"
      >
        <div class="flex justify-between items-center">
          <Title size="sm" :title="item?.title" :smallTitle="item?.code" />
          <span>{{ getPrice }}</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs select-none">
            <p>{{ $t("ui.type") }}</p>
            <p>{{ item?.type }}</p>
          </div>
          <div class="flex items-center justify-between text-xs select-none">
            <p>{{ $t("ui.date") }}</p>
            <p>{{ getDate }}</p>
          </div>
        </div>
        <Title size="sm" :title="$t('ui.properties')" />
        <div class="overflow-auto flex-grow">
          <div
            v-for="(prop, ind) in item?.properties"
            :key="ind"
            class="flex md:hover:text-darkBlue transition-color mt-2 items-center justify-between text-xs select-none"
          >
            <p>{{ prop.title_ar }}</p>
            <p class="me-1">{{ prop.value_ar }}</p>
          </div>
        </div>
      </div>
    </div>
  </WrapperEl>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      location: this.$props.item?.location,
    };
  },
  computed: {
    getPrice() {
      const currencyType = this.item?.currencyType == 0 ? "₺" : "$";
      const price = this.item?.price || 0;
      return `${price} ${currencyType}`;
    },

    getSituation() {
      return this.item?.situation === 1
        ? { title: this.$t("ui.ForRent"), color: "#55f" }
        : this.item?.situation === 2
        ? { title: this.$t("ui.UnderConstruction"), color: "#666" }
        : { title: this.$t("ui.ForSale"), color: "#5f5" };
    },
    getDate() {
      return this.item?.date.toLocaleDateString();
    },
  },
};
</script>

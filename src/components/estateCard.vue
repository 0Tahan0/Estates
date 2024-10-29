<template>
  <WrapperEl class="h-[28rem] hover:ring-8 transition-all ring-gray-600/10">
    <Modal v-if="DeleteEstateConfirm" @close="DeleteEstateConfirm = false"
      >hello</Modal
    >
    <div
      class="h-1/2 group overflow-hidden cursor-pointer relative"
      @click="showDetails()"
    >
      <span
        class="absolute top-0 m-2 p-1 text-xs"
        :style="{ backgroundColor: getSituation.color }"
        >{{ getSituation.title }}</span
      >
      <img
        v-if="item?.attachments?.length > 0 || false"
        :src="item.attachments[0]"
        :alt="item?.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-all"
      />
      <div v-else class="h-full w-full">
        <Icon icon="fa-regular fa-image" class="w-full h-full" />
        <Title title="no image available" class="text-center" />
      </div>
    </div>
    <div class="p-2 grid gap-2">
      <ContextMenu icon="fa-solid fa-ellipses">
        <div class="grid">
          <Button
            @click="DeleteEstateConfirm = true"
            class="flex items-center gap-2"
            ><span>{{ $t("fields.Delete") }}</span>
            <Icon icon="fa-solid fa-trash"
          /></Button>
          <Button class="flex items-center gap-2"
            ><span>{{ $t("fields.Modify") }}</span>
            <Icon icon="fa-solid fa-pen"
          /></Button>
        </div>
      </ContextMenu>
      <Title :title="item?.title" align="center" />
      <Button @click="showDetails()">{{ $t("fields.ShowDetails") }}</Button>
      <div class="grid grid-cols-3 text-xs h-full">
        <div
          v-for="(ecp, ind) in estateCardProp"
          :key="ind"
          class="flex items-center justify-between gap-2 select-none p-2 border-x dark:border-stone-600 text-center"
        >
          <Icon :icon="ecp.icon" />
          <p class="text-ellipsis overflow-hidden">{{ ecp.title }}</p>
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
      DeleteEstateConfirm: false,
      location: this.$props.item?.location,
    };
  },
  computed: {
    estateCardProp() {
      return [
        {
          title: this.getPrice,
          icon: "fa-solid fa-money-bill",
        },
        {
          title: this.getSituation.title,
          icon: "fa-solid fa-building",
        },
        {
          title: this.getDate,
          icon: "fa-solid fa-calendar-days",
        },
        {
          title: this.location.title,
          icon: "fa-solid fa-location-dot",
        },
        {
          title: "istanbul" || "unKnown",
          icon: "fa-solid fa-earth-americas",
        },
        {
          title: this.item?.properties?.length || 0,
          icon: "fa-solid fa-bed",
        },
      ];
    },
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
  methods: {
    showDetails() {
      console.log(this.$router);
      // this.$router.push({
      //   path:`estate-details/${this.item.id}`
      // })
      this.$router.push({
        name: "EstateDetails",
        params: { id: this.item.id },
      });
    },
  },
};
</script>

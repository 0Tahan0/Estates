<template>
  <div>
    <WrapperEl class="dark:bg-mainColor bg-mainColor text-white">
      <Title
        size="lg"
        :title="$t('ui.AboutTheProject')"
        align="center"
        class="mt-5 "
      />
      <div
        class="grid grid-cols-2 sm:grid-cols-4 p-2 gap-2 shadow-md shadow-black/20"
      >
        <div class="grid place-items-center gap-2">
          <Icon icon="fa-solid fa-calendar-days " size="xl" />
          <Title title="date" size="sm" />
        </div>
        <div class="grid place-items-center gap-2">
          <Icon icon="fa-solid fa-money-bill " size="xl" />
          <Title title="price" size="sm" />
        </div>
        <div class="grid place-items-center gap-2">
          <Icon icon="fa-solid fa-location-dot " size="xl" />
          <Title title="location" size="sm" />
        </div>
        <div class="grid place-items-center gap-2">
          <Icon icon="fa-solid fa-building " size="xl" />
          <Title title="properties count" size="sm" />
        </div>
      </div>
    </WrapperEl>
    <div class="space-y-4">
      <Wrapper>
        <Title
          :title="$t('Description')"
          class="border-b dark:border-stone-600"
        />
        <Article class="mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ad
          quidem, quisquam repellendus est suscipit, at repudiandae voluptatem
          dolor quo soluta odit, unde quos distinctio veniam ut tenetur quas
          non!
        </Article>
      </Wrapper>
      <Wrapper>
        <Title :title="$t('Details')" class="border-b dark:border-stone-600" />
        <WrapperEl class="p-2 mt-2">
          <div
            v-for="(ecp, ind) in estateCardProp"
            :key="ind"
            class="flex items-center gap-2 select-none p-2"
          >
            <Icon :icon="ecp.icon" />
            <p class="text-ellipsis overflow-hidden">{{ ecp.title }}</p>
          </div>
        </WrapperEl>
        <WrapperEl class="p-2 mt-2">
          <div class="flex items-center gap-2">
            <Icon icon="fa-solid fa-list" />
            <Title size="sm" :title="$t('ui.properties')" />
          </div>

          <ul class="select-none space-y-2 list-disc ms-5">
            <li
              v-for="(prop, ind) in properties"
              :key="ind"
              class=" flex items-center gap-5"
            >
              <p>{{ prop.key }}</p>
              <p>{{ prop.value }}</p>
            </li>
          </ul>
        </WrapperEl>
      </Wrapper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      properties: [
        {
          key: "key",
          value: "value",
        },
        {
          key: "key",
          value: "value",
        },
        {
          key: "key",
          value: "value",
        },
        {
          key: "key",
          value: "value",
        },
      ],
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
          title: this.location?.title,
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
};
</script>

<template>
  <Container>
    <Wrapper class="-mb-2">
      <button
        @click="currentComponent = 'InputsGenerator'"
        class="ring-0 shadow-none p-2 pb-3"
        :class="
          currentComponent === 'InputsGenerator'
            ? 'dark:bg-darkEl bg-lightEl'
            : ''
        "
      >
        {{ $t("ui.GenerateEstate") }}
      </button>
      <button
        @click="currentComponent = 'ImagesGenerator'"
        class="ring-0 shadow-none p-2 pb-3"
        :class="
          currentComponent === 'ImagesGenerator'
            ? 'dark:bg-darkEl bg-lightEl'
            : ''
        "
      >
        {{ $t("ui.Attachments") }}
      </button>
    </Wrapper>
    <WrapperEl>
      <keep-alive>
        <component :is="currentComponent" />
      </keep-alive>
    </WrapperEl>
  </Container>
</template>
<script>
import ImagesGenerator from "./ImagesGenerator.vue";
import InputsGenerator from "./InputsGenerator.vue";
import { computed } from "vue";

export default {
  components: { ImagesGenerator, InputsGenerator },
  data() {
    return {
      currentComponent: "InputsGenerator",
      estate: {
        title_en: "",
        title_ar: "",
        description_en: "",
        description_ar: "",
        price: null,
        currencyType: 0,
        location: {
          x: null,
          y: null,
        },
        locationName_ar: "",
        locationName_en: "",
        isSpecial: false,
        attachments: new Set([]),
        situation: 0,
        estateType_ar: null,
        estateType_en: null,
      },
    };
  },
  provide() {
    return {
      estate: computed(() => this.estate),
      // attachments: this.estate.attachments,
    };
  },
};
</script>

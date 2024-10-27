<template>
  <PageSplitter>
    <Container>
      <WrapperEl>
        <Gallery :images="images" :elementsCount="10" class="h-[90dvh] mt-10" />
      </WrapperEl>
    </Container>
    <Container class="grid grid-cols-12 md:h-[90dvh] overflow-auto gap-2">
      <div class="md:overflow-auto col-span-12 md:col-span-8 lg:col-span-9">
        <!-- <Wrapper class="dark:border-stone-600 border">
          <Carousel
            :fullImage="false"
            :slides="images.map((e) => (e = { image: e }))"
            :controls="true"
            class="h-[50dvh]"
            autoPlay
          />
        </Wrapper> -->
        <Wrapper
          class="dark:border-stone-600 flex items-center border border-t-transparent"
        >
          <Button
            :active="currentComponent == 'Details'"
            @click="currentComponent = 'Details'"
            class="flex items-center gap-2"
          >
            <p>{{ $t("ui.AboutTheProject") }}</p>
            <Icon icon="fa-solid fa-circle-info " />
          </Button>
          <Button
            class="flex items-center gap-2"
            :active="currentComponent == 'EstateMap'"
            @click="currentComponent = 'EstateMap'"
          >
            <p>{{ $t("ui.Map") }}</p>
            <Icon icon="fa-solid fa-map-location-dot "
          /></Button>
          <IconBtn
            tooltip="share"
            class="ms-auto me-2"
            icon="fa-solid fa-share"
          />
        </Wrapper>
        <div class="flex flex-col overflow-auto">
          <keep-alive>
            <component :is="currentComponent" />
          </keep-alive>
        </div>
      </div>
      <Wrapper class="p-2 col-span-12 md:col-span-4 lg:col-span-3 h-fit">
        <EstateForm />
      </Wrapper>
    </Container>
  </PageSplitter>
</template>

<script>
import Details from "./Details.vue";
import EstateMap from "./EstateMap.vue";
import EstateForm from "./EstateForm.vue";

import im1 from "../../assets/images/banner1.jpg";
import im2 from "../../assets/images/banner2.jpg";
import im3 from "../../assets/images/banner3.jpg";
import im4 from "../../assets/images/banner5.jpg";
import im5 from "../../assets/images/banner7.jpg";
import im6 from "../../assets/images/banner8.jpg";
import im7 from "../../assets/images/slide.jpg";
import im8 from "../../assets/images/slide2.jpg";
import im9 from "../../assets/images/slide3.jpg";
import im10 from "../../assets/images/Residence-Inn_09-revize_5-480x310.jpg";
import im11 from "../../assets/images/IStown3-5-480x310.jpg";
import im12 from "../../assets/images/odul-istanbul-1.jpg";
import im13 from "../../assets/images/May_22-9-480x310.jpg";
export default {
  props: ["id"],
  components: {
    Details,
    EstateMap,
    EstateForm,
  },
  data() {
    return {
      currentComponent: "Details",
      images: [
        im1,
        im2,
        im3,
        im4,
        im5,
        im6,
        im7,
        im8,
        im9,
        im10,
        im11,
        im12,
        im13,
      ],
    };
  },
  mounted() {
    // console.clear();
    // console.log(this.$route);
  },
  //   async beforeRouteUpdate(to, from) {
  //   // react to route changes...
  //   this.userData = await fetchUser(to.params.id)
  // },
};
</script>

<template>
  <div>
    <NavBar />
    <PageSplitter>
      <Carousel :slides="slides" class="h-screen" autoPlay motion />
      <Container>
        <OurProject />
      </Container>
      <InfoSection />
      <NewestProjects />
    </PageSplitter>
    <div class="mt-10">
      <BlogsInfo />
      <Footer />
    </div>
  </div>
</template>
<script>
import OurProject from "./OuerProjects.vue";
import InfoSection from "./InfoSection.vue";
import NewestProjects from "./NewestProjects.vue";
import BlogsInfo from "./BlogsInfo.vue";
import slide from "../../assets/images/slide.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
export default {
  components: {
    OurProject,
    InfoSection,
    NewestProjects,
    BlogsInfo,
  },
  computed: {
    slides() {
      return [
        {
          title: this.$t("ui.YourBestChoice"),
          image: slide,
        },
        {
          title: this.$t("ui.AllYouNeedToKnow"),
          image: slide2,
        },
        {
          title: this.$t("ui.DreamHouse"),
          image: slide3,
        },
      ];
    },
  },
};
</script>

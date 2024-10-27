<template>
  <Section
    :title="$t('ui.OurProjects')"
    :smallTitle="$t('uiText.OurProjectsText')"
  >
    <Swiper :slides="projects.length">
      <template v-slot="{ slotContent }">
        <ImageCard :project="projects[slotContent]" />
      </template>
    </Swiper>
  </Section>
</template>
<script>
import im1 from "../../assets/images/9-480x310.jpg";
import im2 from "../../assets/images/IStown3-5-480x310.jpg";
import im3 from "../../assets/images/Residence-Inn_09-revize_5-480x310.jpg";
import im4 from "../../assets/images/Projescope-Nivak-Florya-Properties-in-Istanbul-2-480x310.jpg";
import im5 from "../../assets/images/odul-istanbul-1.jpg";
import im6 from "../../assets/images/May_22-9-480x310.jpg";
import im7 from "../../assets/images/DIS-480x310.png";
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          image: im1,
          title: "title",
          details: "detail",
        },
        {
          id: 2,
          image: im2,
          title: "title",
          details:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quisquam molestias totam laborum. Officia qui, id distinctio ut laudantium modi doloribus eveniet obcaecati, aperiam alias quia nulla nisi a voluptatibus.",
        },
        {
          id: 3,
          image: im3,
          title: "title",
          details: "detail",
        },
        {
          id: 4,
          image: im4,
          title: "title",
          details:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quisquam molestias totam laborum. Officia qui, id distinctio ut laudantium modi doloribus eveniet obcaecati, aperiam alias quia nulla nisi a voluptatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quisquam molestias totam laborum. Officia qui, id distinctio ut laudantium modi doloribus eveniet obcaecati, aperiam alias quia nulla nisi a voluptatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quisquam molestias totam laborum. Officia qui, id distinctio ut laudantium modi doloribus eveniet obcaecati, aperiam alias quia nulla nisi a voluptatibus.",
        },
        {
          id: 5,
          image: im5,
          title: "title",
          details: "detail",
        },
        {
          id: 6,
          image: im6,
          title: "title",
          details: "detail",
        },
        {
          id: 7,
          image: im7,
          title: "title",
          details: "detail",
        },
      ],
    };
  },
};
</script>

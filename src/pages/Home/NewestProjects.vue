<template>
  <Container>
    <Section
      OurNewProjects
      :title="$t('ui.OurNewProjects')"
      :smallTitle="$t('uiText.OurNewProjectsText')"
    >
      <Swiper :slides="+(projects.length)">
        <template v-slot="{ slotContent }">
          <EstateCard :project="projects[slotContent]" />
        </template>
      </Swiper>
    </Section>
  </Container>
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
          price: 130000,
          location: "Istanbul/ Beylikduzu",
          locationNumber: "MST- IST -0431",
          properties: [
            {
              title: "غرف نوم  ",
              value: "2",
            },
            {
              title: "حمامات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
          ],
          projectStatus: 0,
        },
        {
          id: 2,
          image: im2,
          price: 130000,

          location: "Istanbul/ Beylikduzu",
          locationNumber: "MST- IST -0431",
          properties: [
            {
              title: "غرف نوم  ",
              value: "2",
            },
            {
              title: "حمامات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
          ],
          projectStatus: 0,
        },
        {
          id: 3,
          image: im3,
          price: 130000,
          location: "Istanbul/ Beylikduzu",
          locationNumber: "MST- IST -0431",
          properties: [
            {
              title: "غرف نوم  ",
              value: "2",
            },
            {
              title: "حمامات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
          ],
          projectStatus: 0,
        },
        {
          id: 4,
          image: im4,
          price: 130000,
          location: "Istanbul/ Beylikduzu",
          locationNumber: "MST- IST -0431",
          properties: [
            {
              title: "غرف نوم  ",
              value: "2",
            },
            {
              title: "حمامات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
          ],
          projectStatus: 0,
        },
        {
          id: 5,
          image: im5,
          price: 130000,

          location: "Istanbul/ Beylikduzu",
          locationNumber: "MST- IST -0431",
          properties: [
            {
              title: "غرف نوم  ",
              value: "2",
            },
            {
              title: "حمامات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
          ],
          projectStatus: 0,
        },
        {
          id: 6,
          image: im6,
          price: 130000,

          location: "Istanbul/ Beylikduzu",
          locationNumber: "MST- IST -0431",
          properties: [
            {
              title: "غرف نوم  ",
              value: "2",
            },
            {
              title: "حمامات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
          ],
          projectStatus: 0,
        },
        {
          id: 7,
          image: im7,
          price: 130000,

          location: "Istanbul/ Beylikduzu",
          locationNumber: "MST- IST -0431",
          properties: [
            {
              title: "غرف نوم  ",
              value: "2",
            },
            {
              title: "حمامات",
              value: "2",
            },
            {
              title: "كراجات",
              value: "2",
            },
          ],
          projectStatus: 0,
        },
      ],
    };
  },
};
</script>

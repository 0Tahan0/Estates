<template>
  <NavBar />
  <PageSplitter>
    <RouterView />
    <PageSplitter v-if="showEstateSection">
      <EstateMap />
      <Container>
        <Button
          @click="$router.push({ name: 'Generator' })"
          class="flex items-center gap-2 border"
        >
          <p>{{ $t("ui.GenerateEstate") }}</p>
          <Icon icon="fa-solid fa-square-plus" />
        </Button>
      </Container>
      <EstateCardsGroup :estates="estates" />
    </PageSplitter>
    <Footer />
  </PageSplitter>
</template>
<script>
import EstateGenerator from "./Generator/Generator.vue";
import EstateMap from "./EstateMap.vue";
import EstateCardsGroup from "./EstatesCardsGroup.vue";

// ============
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
  components: {
    EstateMap,
    EstateCardsGroup,
    EstateGenerator,
  },
  computed: {
    showEstateSection() {
      return this.$route.path === "/Estates"; // Change '/nested' to your nested route path
    },
  },
  data() {
    return {
      estates: [
        {
          id: 1,
          title: "شقة سكنية",
          price: 20000,
          date: new Date(),
          situation: 0,
          location: {
            x: 28.8783589,
            y: 41.1082376,
            title: "istanbul sdasdas;ldmlksdm",
          },
          code: "n8",
          isSpecial: false,
          currencyType: 0,
          type: "شقة سكنية",
          attachments: [im2, im1, im3],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
        {
          id: 2,
          title: "شقة سكنية",
          price: 1342,
          date: new Date(),
          situation: 2,
          location: {
            x: 28.5683589,
            y: 41.1079376,
            title: "location title",
          },
          code: "n89",
          isSpecial: false,
          currencyType: 1,
          type: "شقة سكنية",
          attachments: [im4, im5, im6, im7, im8],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
        {
          id: 3,
          title: "شقة سكنية",
          price: 51452,
          date: new Date(),
          situation: 1,
          location: {
            x: 28.5683589,
            y: 41.1079376,
            title: "location title",
          },
          code: "n89",
          isSpecial: false,
          currencyType: 0,
          type: "شقة سكنية",
          attachments: [im9, im10, im12, im11, im13],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
        {
          id: 1,
          title: "شقة سكنية",
          price: 20000,
          date: new Date(),
          situation: 0,
          location: {
            x: 28.8783589,
            y: 41.1082376,
            title: "location title",
          },
          code: "n8",
          isSpecial: false,
          currencyType: 0,
          type: "شقة سكنية",
          attachments: [im1, im2, im3],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
        {
          id: 2,
          title: "شقة سكنية",
          price: 1342,
          date: new Date(),
          situation: 2,
          location: {
            x: 28.5683589,
            y: 41.1079376,
            title: "location title",
          },
          code: "n89",
          isSpecial: false,
          currencyType: 1,
          type: "شقة سكنية",
          attachments: [im4, im5, im6, im7, im8],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
        {
          id: 3,
          title: "شقة سكنية",
          price: 51452,
          date: new Date(),
          situation: 1,
          location: {
            x: 28.5683589,
            y: 41.1079376,
            title: "location title",
          },
          code: "n89",
          isSpecial: false,
          currencyType: 0,
          type: "شقة سكنية",
          attachments: [im9, im10, im12, im11, im13],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
        {
          id: 1,
          title: "شقة سكنية",
          price: 20000,
          date: new Date(),
          situation: 0,
          location: {
            x: 28.8783589,
            y: 41.1082376,
            title: "location title",
          },
          code: "n8",
          isSpecial: false,
          currencyType: 0,
          type: "شقة سكنية",
          attachments: [im1, im2, im3],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
        {
          id: 2,
          title: "شقة سكنية",
          price: 1342,
          date: new Date(),
          situation: 2,
          location: {
            x: 28.5683589,
            y: 41.1079376,
            title: "location title",
          },
          code: "n89",
          isSpecial: false,
          currencyType: 1,
          type: "شقة سكنية",
          attachments: [im4, im5, im6, im7, im8],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
        {
          id: 3,
          title: "شقة سكنية",
          price: 51452,
          date: new Date(),
          situation: 1,
          location: {
            x: 28.5683589,
            y: 41.1079376,
            title: "location title",
          },
          code: "n89",
          isSpecial: false,
          currencyType: 0,
          type: "شقة سكنية",
          attachments: [im9, im10, im12, im11, im13],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
        {
          id: 1,
          title: "شقة سكنية",
          price: 20000,
          date: new Date(),
          situation: 0,
          location: {
            x: 28.8783589,
            y: 41.1082376,
            title: "location title",
          },
          code: "n8",
          isSpecial: false,
          currencyType: 0,
          type: "شقة سكنية",
          attachments: [im1, im2, im3],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
        {
          id: 2,
          title: "شقة سكنية",
          price: 1342,
          date: new Date(),
          situation: 2,
          location: {
            x: 28.5683589,
            y: 41.1079376,
            title: "location title",
          },
          code: "n89",
          isSpecial: false,
          currencyType: 1,
          type: "شقة سكنية",
          attachments: [im4, im5, im6, im7, im8],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
        {
          id: 3,
          title: "شقة سكنية",
          price: 51452,
          date: new Date(),
          situation: 1,
          location: {
            x: 28.5683589,
            y: 41.1079376,
            title: "location title",
          },
          code: "n89",
          isSpecial: false,
          currencyType: 0,
          type: "شقة سكنية",
          attachments: [im9, im10, im12, im11, im13],
          properties: [
            {
              title_ar: "الحمامات",
              title_en: "tolits",
              value_ar: "2",
              value_en: "2",
              description_ar: null,
              description_en: null,
            },
            {
              title_ar: "الغرف",
              title_en: "rooms",
              value_ar: "3",
              value_en: "3",
              description_ar: null,
              description_en: null,
            },
          ],
        },
      ],
    };
  },
};
</script>

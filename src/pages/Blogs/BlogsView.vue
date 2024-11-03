<template>
  <NavBar />
  <PageSplitter>
    <Container>
      <button
        v-for="item in info"
        :key="item.id"
        @click="currentComponent = item.id"
        class="ring-0 shadow-none p-2 pb-3"
        :class="currentComponent === item.id ? 'dark:bg-darkEl bg-lightEl' : ''"
      >
        {{ blog(item.id).name }}
      </button>
      <WrapperEl>
        <!-- <BlogsDetails :item="getBlog('WorkPermit')" /> -->
      </WrapperEl>

      <!-- <BlogsGroup /> -->
    </Container>
    <Footer />
  </PageSplitter>
</template>

<script>
import BlogsGroup from "./BlogsGroup.vue";
import BlogsDetails from "./BlogsDetails.vue";
import { EnglishBlogs } from "../../i18n/Blogs";
export default {
  props: ["id"],
  components: {
    BlogsDetails,
    BlogsGroup,
  },
  computed: {
    getCompoTranslatedName() {
      return this.$t(`ui.${this.$route.name}`);
    },
    info() {
      return [
        // {
        //   icon: "fa-solid fa-user-shield",
        //   id: "InsuranceServices",
        // },
        {
          icon: "fa-solid fa-address-card",
          id: "ObtainingCitizenship",
        },
        // {
        //   icon: "fa-solid fa-passport",
        //   id: "TurkishResidence",        // },
        {
          icon: "fa-solid fa-briefcase",
          id: "WorkPermit",
        },
        {
          icon: "fa-solid fa-chart-column",
          id: "CompaniesFormation",
        },
        {
          icon: "fa-solid fa-graduation-cap",
          id: "StudentServices",
        },
        // {
        //   icon: "fa-solid fa-building",
        //   id: "RealEstateService",
        // },
      ];
    },
  },
  methods: {
    getBlog(_id) {
      const trans = (word) => this.$t(`Blogs.${_id}.${word}`) || "";
      const blog = EnglishBlogs()[_id];
      blog.name = trans("name");
      blog.title = trans("title");
      blog.description = trans("description");
      blog.properties = blog.properties?.map((prop, propIndex) => {
        const newProperites = {
          title: trans(`properties[${propIndex}].title`),
          description: trans(`properties[${propIndex}].description`),
          items: prop?.items?.map((item, itemIndex) => {
            const newItem = {
              title: trans(
                `properties[${propIndex}].items[${itemIndex}].title`
              ),
              description: trans(
                `properties[${propIndex}].items[${itemIndex}].description`
              ),
              values: item?.values?.map((val, valIndex) => {
                const newValue = {
                  value: trans(
                    `properties[${propIndex}].items[${itemIndex}].values[${valIndex}].value`
                  ),
                };
                return newValue;
              }),
            };
            return newItem;
          }),
        };
        return newProperites;
      });

      return blog;
    },
  },
};
</script>

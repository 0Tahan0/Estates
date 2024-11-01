<template>
  <NavBar />
  <PageSplitter>
    <Container>
      <BlogsDetails :item="getBlog('ObtainingCitizenship')" />
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
  components: {
    BlogsDetails,
    BlogsGroup,
  },
  computed: {
    getCompoTranslatedName() {
      return this.$t(`ui.${this.$route.name}`);
    },
  },
  methods: {
    getBlog(_id) {
      const trans = (word) => this.$t(`Blogs.${_id}.${word}`) || "";
      const blog = EnglishBlogs()[_id];
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

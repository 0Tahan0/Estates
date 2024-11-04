<template>
  <NavBar />
  <PageSplitter>
    <Container class="mt-5">
      <IconBtn
        icon="fa-solid fa-arrow-up"
        @click="handelScrollTop()"
        class="rounded-full ring fixed bottom-0 left-0 translate-x-full -translate-y-full"
      >
      </IconBtn>
      <ContextMenu class="md:hidden">
        <template #button>
          <div>
            <Button class="flex items-center gap-2">
              <span> {{ $t("ui.ShowTheList") }} </span>
              <Icon icon="fa-solid fa-list" />
            </Button>
          </div>
        </template>
        <div class="grid">
          <Button
            v-for="b in blogs"
            :key="b"
            class=""
            @click="handelScroll(b)"
            >{{ getBlog(b).name }}</Button
          >
        </div>
      </ContextMenu>
      <div class="hidden md:flex gap-2 flex-wrap my-5">
        <Button v-for="b in blogs" :key="b" class="" @click="handelScroll(b)">{{
          getBlog(b).name
        }}</Button>
      </div>
      <PageSplitter>
        <BlogsDetails v-for="b in blogs" :key="b" :item="getBlog(b)" />
      </PageSplitter>

      <!-- <BlogsGroup /> -->
    </Container>
    <Footer />
  </PageSplitter>
</template>

<script>
// import BlogsGroup from "./BlogsGroup.vue";
import BlogsDetails from "./BlogsDetails.vue";
import { EnglishBlogs, blogs } from "../../i18n/Blogs";
export default {
  props: ["id"],
  components: {
    BlogsDetails,
    // BlogsGroup,
  },
  computed: {
    getCompoTranslatedName() {
      return this.$t(`ui.${this.$route.name}`);
    },
    blogs() {
      return blogs();
    },
  },
  methods: {
    handelScrollTop() {
      document.body.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handelScroll(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    },
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

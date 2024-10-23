<template>
  <Wrapper class="h-full text-sm">
    <router-view class="h-full" />
  </Wrapper>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isDarkMode", "lang"]),
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      document
        .querySelector(":root")
        .setAttribute("dir", lang == "ar" ? "rtl" : "ltr");
    },
  },
  watch: {
    isDarkMode(val) {
      document
        .querySelector(":root")
        .setAttribute("data-mode", val ? "dark" : "light");
    },
    lang(val) {
      this.changeLang(val);
    },
  },
  mounted() {
    this.changeLang(this.lang);
    document
      .querySelector(":root")
      .setAttribute("data-mode", this.isDarkMode ? "dark" : "light");
  },
};
</script>

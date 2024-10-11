<template>
  <Wrapper
    :class="`w-full top-0 left-0 sticky z-50 backdrop-blur-md ${getNaveShape}`"
  >
    <div class="relative transition-all duration-300">
      <Container class="flex items-center py-1">
        <router-link to="/">
          <Logo class="invert dark:invert-0" />
        </router-link>
        <div class="items-center gap-5 ms-4 hidden md:flex">
          <tab-btn
            v-for="router in routers"
            :key="router.page"
            :path="router.path"
            >{{ router.page }}</tab-btn
          >
        </div>
        <div class="flex items-center ms-auto">
          <div class="itme-center gap-2 hidden md:flex">
            <IconBtn
              :tooltip="isDarkMode ? $t('ui.lightMode'):$t('ui.darkMode')"
              @click="toggleDarkMode"
              class="hover:ring-0 p-0.5"
              :icon="`fa-regular ${!isDarkMode ? 'fa-moon' : 'fa-sun'}`"
            />
            <button
              :tooltip="$t(`ui.${lang}`)"
              @click="toggleLang"
              class="uppercase"
            >
              {{ lang }}
            </button>
          </div>

    
            <IconBtn
          
            class="md:hidden rounded-none hover:ring-0"
            @click="openNav = !openNav"
            :icon="`fa-solid ${openNav ? 'fa-close' : 'fa-bars'}`"
          />
       
        </div>
      </Container>
      <Transition>
        <Wrapper
          v-if="openNav"
          class="absolute left-0 w-full flex flex-col items-center text-center gap-2 transition-all black/50 shadow-lg"
        >
          <tab-btn
            v-for="router in routers"
            :key="router.page"
            :path="router.path"
            >{{ router.page }}</tab-btn
          >
        </Wrapper>
      </Transition>
    </div>
  </Wrapper>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import TabBtn from "./TabBtn.vue";
export default {
  props: {
    status: {
      type: String,
      default: "sticky",
    },
  },
  data() {
    return {
      scrollingDestain: 200,
      currentScroll: 0,
      openNav: false,
      
    };
  },
  components: {
    "tab-btn": TabBtn,
  },
  computed: {
    ...mapGetters(["isDarkMode", "lang"]),

    routers() {
      return [
        {
          path: "/",
          page: this.$t("ui.Home"),
        },
        {
          path: "/about",
          page: this.$t("ui.AboutUs"),
        },
        // {
        //   path: "/properties",
        //   page: this.$t("ui.Estate"),
        // },
      ];
    },

    getNaveShape() {
      return (
        this.currentScroll > this.scrollingDestain &&
        ` shadow-black/20 shadow-md `
      );
    },
    customizOpenedNav() {
      if (this.openNav) {
      }
    },
  },
  methods: {
    doWindowScrolling(e) {
      this.currentScroll = window.scrollY;
      this.openNav = false;
    },
    windowResizing() {
      if (document.body.offsetWidth >= 768);
      this.openNav = false;
    },
    ...mapActions(["toggleDarkMode", "toggleLang"]),
  },
  watch: {},
  mounted() {
    window.addEventListener("scroll", (e) => this.doWindowScrolling(e));
    window.addEventListener("resize", (e) => this.windowResizing());
  },
  beforeUnmount() {
    window.removeEventListener("scroll", (e) => this.doWindowScrolling(e));
    window.removeEventListener("resize", (e) => this.windowResizing());
  },
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

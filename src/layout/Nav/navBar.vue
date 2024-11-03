<template>
  <Wrapper
    :class="`w-full top-0 left-0 sticky z-50 backdrop-blur-md shadow-sm ${openNav && 'h-dvh overflow-hidden  '} ${getNaveShape}`"
  >
    <div class="relative transition-all duration-300 flex flex-col h-full ">
      <Container class="flex items-center py-1">
        <router-link to="/">
          <Logo class="invert dark:invert-0" />
        </router-link>
        <div class="items-center gap-5 ms-4 hidden md:flex">
          <TabBtn
            v-for="router in routers"
            :key="router.page"
            :path="router.path"
            >{{ router.page }}</TabBtn
          >
        </div>
        <div class="flex items-center ms-auto">
          <div class="itme-center gap-2 hidden md:flex">
            <IconBtn
              :tooltip="isDarkMode ? $t('ui.lightMode') : $t('ui.darkMode')"
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
      <!-- <Transition> -->
        <Wrapper
          v-if="openNav"
          class="  flex-grow p-5 left-0 flex flex-col  text-center gap-2 transition-all "
        >
          <WrapperEl class="grid p-2 gap-2">
            <TabBtn
              @click="openNav = false"
              class="dark:hover:bg-stone-600 hover:bg-stone-200"
              v-for="router in routers"
              :key="router.page"
              :path="router.path"
              >{{ router.page }}</TabBtn
            >
          </WrapperEl>
          <div class="flex gap-5 mt-5  justify-center md:justify-start">
              <IconBtn
                icon="fa-facebook-f fa-brands"
                class=" text-gray-400 dark:text-gray-500 hover:text-blue-500    hover:ring-0 "
              />
              <IconBtn
                icon=" fa-tiktok fa-brands"
                class=" text-gray-400  dark:text-gray-500 hover:text-black dark:hover:text-white   hover:ring-0 "
              />
              <IconBtn
                icon=" fa-instagram fa-brands"
                class=" text-gray-400 dark:text-gray-500 hover:text-rose-500   hover:ring-0 "
              />
              <IconBtn
                icon=" fa-twitter fa-brands"
                class=" text-gray-400  dark:text-gray-500 hover:text-sky-500     hover:ring-0 "
              />
            </div>
          <div class="flex gap-5  mt-5 mx-auto">
            <Button
              :tooltip="isDarkMode ? $t('ui.lightMode') : $t('ui.darkMode')"
              @click="toggleDarkMode"
              class="hover:ring-0 p-0.5"
            >
              {{ isDarkMode ? $t("ui.lightMode") : $t("ui.darkMode") }}
              <Icon :icon="`fa-regular ${!isDarkMode ? 'fa-moon' : 'fa-sun'}`"
            /></Button>

            <button
              :tooltip="$t(`ui.${lang}`)"
              @click="toggleLang"
              class="uppercase"
            >
              {{ lang }}
            </button>
          </div>

        </Wrapper>
      <!-- </Transition> -->
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
    TabBtn,
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
          path: "/About",
          page: this.$t("ui.AboutUs"),
        },
        {
          path: "/Blogs",
          page: this.$t("ui.Blogs"),
        },
        {
          path: "/Estates",
          page: this.$t("ui.Estates"),
        },
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
      // this.openNav = false;
    },
    windowResizing() {
      if (document.body.offsetWidth >= 768);
      this.openNav = false;
    },
    ...mapActions(["toggleDarkMode", "toggleLang"]),
  },
  watch: {
    openNav(val) {
      const root = document.querySelector(":root");
      if (val) root.classList.add("overflow-hidden");
      else root.classList.remove("overflow-hidden");
    },
  },
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
  /* transition: opacity 0.3s ease; */
  transform: translateY(0%);
  z-index: -1;
}

.v-enter-from,
.v-leave-to {
  /* opacity: 0; */
  transform: translateY(-100%);
}
</style>

<template>
  <div ref="contextmenu_box">
    <div class="relative">
      <IconBtn
        icon="fa-solid fa-ellipsis"
        class="dark:bg-black bg-white bg-opacity-40 dark:bg-opacity-40"
        @click="showMenu = !showMenu"
      />
      <Transition>
        <WrapperEl
          v-if="showMenu"
          class="absolute shadow-md top-8 left-0 -ms-12 z-50"
        >
          <slot></slot>
        </WrapperEl>
      </Transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    checkOutOfContainer(e) {
      const menuBox = this.$refs.contextmenu_box;
      this.showMenu = menuBox.contains(e.target);
    },
  },
  watch: {
    showMenu(val) {
      if (val) {
        window.addEventListener("click", (e) => this.checkOutOfContainer(e));
      }
    },
  },
  // beforeUnmount() {
  //     window.removeEventListener("click");
  // },
};
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

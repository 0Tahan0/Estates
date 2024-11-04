<template>
  <div ref="contextmenu_box">
    <div class="relative">
      <div @click="showMenu = !showMenu">

      <slot name="button"
      >
      <IconBtn
        icon="fa-solid fa-ellipsis"
        class="dark:bg-black bg-white bg-opacity-40 dark:bg-opacity-40"
        
      />
      </slot>
      </div>

      <Transition>
        <WrapperEl
          v-if="showMenu"
          class="absolute shadow-md top-8 me-auto  ms-12 z-50"
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

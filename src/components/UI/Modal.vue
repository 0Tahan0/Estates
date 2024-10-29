<template>
  <teleport to="body">
    <Container class="z-50">
      <!-- Modal Overlay -->
      <div
        class="fixed h-dvh w-screen top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center"
        
      >
        <Wrapper class="relative  overflow-auto flex flex-col transition-all max-w-screen-lg w-1/3 " >
          <!-- Close Button -->
          <div class="flex items-center p-1 ">
            <IconBtn icon="fa-solid fa-close" @click="closeModal" />
          </div>

          <!-- Modal Content Slot -->
          <div class="p-1 flex-grow ">
            <slot></slot>
          </div>
        </Wrapper>
      </div>
    </Container>
  </teleport>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },

  },
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    toggleExpandWindow() {
      this.full = !this.full;
    },
  },
};
</script>

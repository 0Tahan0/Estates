<template>
  <teleport to="body" >
    <Container class="z-[99999]" >
      <!-- Modal Overlay -->
      <div
    
        class="fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <WrapperEl class="relative max-w-lg w-full p-1">
          <!-- Close Button -->
          <div>
            <IconBtn icon="fas fa-close" @click="closeModal" />
          </div>

          <!-- Modal Content Slot -->
          <div>
            <slot></slot>
          </div>
        </WrapperEl>
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
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

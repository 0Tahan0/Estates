<template>
  <teleport to="body">
    <Container class="z-50">
      <!-- Modal Overlay -->
      <div
        class="fixed h-dvh w-screen top-0 left-0 bg-black bg-opacity-50 "
        :class="!full && 'flex items-center justify-center'"
      >
        <Wrapper class="relative  overflow-auto flex flex-col transition-all" :style="customFullWindow">
          <!-- Close Button -->
          <div class="flex items-center p-1 ">
            <IconBtn icon="fa-solid fa-close" @click="closeModal" />
            <IconBtn icon="fa-solid fa-expand" @click="toggleExpandWindow" />
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
    fullWindow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      full: this.$props.fullWindow,
    };
  },
  computed: {
    customFullWindow() {
      if (this.full)
        return "min-height:100% !important; min-width:100% !important; z-index:99999 ;";
    },
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

<template>
  <div
    class="relative w-full overflow-x-hidden overflow-y-clip pt-2 pb-5"
    dir="rtl"
    @mousedown="startDrag"
    @touchstart="startDrag"
    @mousemove="dragMove"
    @touchmove="dragMove"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @touchend="endDrag"
  >
    <!-- Slider Container -->
    <div
      class="flex transition-transform duration-300 ease-in-out h-full"
      :style="{
        transform: `translateX(calc(${currentIndex * 100}% + ${dragOffset}px))`,
        cursor: `${dragging ? 'grabbing' : 'grab'}`,
      }"
    >
      <!-- Loop through grouped slots -->
      <div
        v-for="(group, index) in groupedSlots"
        :key="index"
        class="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <!-- Slot Content (Custom Slides) -->
        <slot v-for="slotContent in group" :slotContent="slotContent"></slot>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 md:block hidden"
      @click="nextSlide"
    >
      <Icon :icon="['fas', 'angle-left']" />
    </button>
    <button
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 md:block hidden"
      @click="prevSlide"
    >
      <Icon :icon="['fas', 'angle-right']" />
    </button>

    <!-- Pagination Dots -->
    <div class="absolute bottom-0 w-full flex justify-center gap-2">
      <span
        v-for="(group, index) in groupedSlots"
        :key="index"
        @click="goToSlide(index)"
        class="cursor-pointer w-5 h-2"
        :class="currentIndex === index ? 'bg-lightBlue' : 'bg-gray-400'"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Number, // Number of slides expected
      default: 0,
    },
  },
  data() {
    return {
      currentIndex: 0,
      windowWidth: window.innerWidth,
      dragging: false,
      dragStartX: 0,
      dragOffset: 0,
      dragingDistance: 50,
      dir: document.querySelector(":root").getAttribute("dir"),
    };
  },
  computed: {
    groupedSlots() {
      let perSlide = 1; // Default for small screens
      if (this.windowWidth >= 1024) {
        perSlide = 3; // 3 items per slide for large screens
      } else if (this.windowWidth >= 640) {
        perSlide = 2; // 2 items per slide for medium screens
      }
      return this.chunkArray([...Array(this.slides).keys()], perSlide);
    },
  },
  methods: {
    chunkArray(arr, size) {
      const result = [];
      for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
      }
      return result;
    },
    nextSlide() {
      if (this.currentIndex < this.groupedSlots.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.groupedSlots.length - 1;
      }
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startDrag(e) {
      this.dragging = true;
      this.dragStartX =
        e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    },
    dragMove(e) {
      if (!this.dragging) return;
      const currentX =
        e.type === "touchmove" ? e.touches[0].clientX : e.clientX;

      // Determine if we should change slide based on drag distance
      if (Math.abs(currentX - this.dragStartX) > this.dragingDistance)
        this.dragOffset = currentX - this.dragStartX;
    },
    endDrag() {
      if (!this.dragging) return;
      this.dragging = false;
      if (Math.abs(this.dragOffset) > this.dragingDistance) {
        if (this.dragOffset < 0) {
          this.prevSlide();
        } else {
          this.nextSlide();
        }
      }

      this.dragOffset = 0;
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
};
</script>

<style scoped>
/* Optional: Add additional styling here */
</style>

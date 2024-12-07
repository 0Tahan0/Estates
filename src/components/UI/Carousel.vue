<template>
  <div
    dir="rtl"
    class="carousel-container relative w-full h-full mx-auto"
    @touchstart="startTouch"
    @touchmove="moveTouch"
    @touchend="endTouch"
  >
    <!-- Slides -->
    <div
      class="carousel-slides flex transition-transform duration-500 ease-in-out h-full"
      :style="{ transform: `translateX(${currentIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="w-full flex-shrink-0 h-full relative overflow-hidden grid place-items-center my-auto"
      >
        <img
          draggable="false"
          :src="slide.image"
          :alt="slide.title"
          class="max-h-full max-w-full"
          :class="{
            motion: motion,
            'w-full h-full object-cover': fullImage,
          }"
        />
        <span
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200 text-xl md:text-3xl lg:text-5xl text-center max-w-xl leading-10"
        >
          {{ slide.title }}</span
        >
      </div>
    </div>

    <!-- Next Button -->
    <button
      v-if="controls"
      @click="nextSlide"
      class="absolute top-1/2 transform -translate-y-1/2 left-2 bg-black/50 text-white px-3 py-2"
    >
      <Icon :icon="['fas', 'angle-left']" />
    </button>
    <!-- Previous Button -->
    <button
      v-if="controls"
      @click="prevSlide"
      class="absolute top-1/2 transform -translate-y-1/2 right-2 bg-black/50 text-white px-3 py-2"
    >
      <Icon :icon="['fas', 'angle-right']" />
    </button>

    <!-- Indicators -->
    <div class="absolute bottom-2 -translate-x-1/2 left-1/2" v-if="controls">
      <span v-if="slides?.length < 15" class="flex justify-center gap-2">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          @click="setCurrentSlide(index)"
          class="cursor-pointer w-5 h-2"
          :class="currentIndex === index ? 'bg-mainColor' : 'bg-gray-400'"
        >
        </span>
      </span>
      <span v-else class="p-1 rounded-full bg-black bg-opacity-10">
        {{ currentIndex + 1 }}/{{ slides.length }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["move"],
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    motion: {
      type: Boolean,
      default: false,
    },
    current: {
      type: Number,
      default: 0,
    },
    fullImage: {
      type: Boolean,
      default: true,
    },
    controls: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      time: 7000,
      startX: 0,
      endX: 0,
    };
  },
  watch: {
    current(val) {
      this.currentIndex = val;
    },
    currentIndex(val) {
      this.$emit("move", val);
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
    },
    nextSlide() {
      this.currentIndex =
        this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
    },
    setCurrentSlide(index) {
      this.currentIndex = index;
    },
    startTouch(event) {
      this.startX = event.touches[0].clientX;
    },
    moveTouch(event) {
      this.endX = event.touches[0].clientX;
    },
    endTouch() {
      if (this.startX - this.endX > 50) {
        this.nextSlide(); // Swipe left
      } else if (this.endX - this.startX > 50) {
        this.prevSlide(); // Swipe right
      }
    },
  },
  mounted() {
    this.currentIndex = this.current;
    if (this.autoPlay) setInterval(() => this.nextSlide(), this.time);
  },
};
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
}

.carousel-slides {
  display: flex;
}
.motion {
  animation: motion 15s linear infinite forwards alternate;
}
@keyframes motion {
  from {
    scale: 1;
  }
  to {
    scale: 1.25;
  }
}
</style>

<template>
  <div class="relative flex flex-col p-2">
    <Carousel
      :fullImage="fullImage"
      :current="currentIndex"
      :slides="images.map((e) => (e = { image: e }))"
      class="flex-grow"
      :controls="controls"
      @move="$emit('move', $event)"
    />
    <div class="w-full h-fit">
      <slot></slot>
      <Swiper
        :elementsCount="elementsCount"
        :slides="images.length"
        class="h-full"
      >
        <template v-slot="{ slotContent }">
          <div
            @click="currentIndex = images.indexOf(images[slotContent])"
            class="h-[100px] scale-90 cursor-pointer w-[100px] overflow-hidden transition-all"
            :class="{
              'scale-100  border-b-4 border-mainColor ':
                currentIndex == images.indexOf(images[slotContent]),
            }"
          >
            <img
              :draggable="false"
              :src="images[slotContent]"
              alt="photo"
              class="w-full max-w-full object-cover select-none h-full max-h-full"
            />
          </div>
        </template>
      </Swiper>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["move"],
  props: {
    images: { type: Array, default: [] },
    fullImage: {
      type: Boolean,
      default: false,
    },
    current: {
      type: Number,
      default: 0,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    elementsCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentIndex: this.$props.current,
    };
  },
  watch: {
    current(val) {
      this.currentIndex = val;
    },
  },
};
</script>

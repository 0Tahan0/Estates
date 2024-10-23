<template>
  <Container class="relative flex flex-col">
    <Carousel
      :fullImage="false"
      :current="current"
      :slides="images.map((e) => (e = { image: e }))"
      class="max-w-screen-lg h-full flex-grow"
      :controls="false"
    />
    <div class=" w-full h-1/4">
      <Swiper :elementsCount="3" :slides="images.length" class="h-full">
        <template v-slot="{ slotContent }">
          <button
            @click="current = images.indexOf(images[slotContent])"
            class="grid place-items-center h-full scale-none transition-all"
            :class="{'scale-90 grayscale':(current != images.indexOf(images[slotContent]))}"
          >
            <img
              :draggable="false"
              :src="images[slotContent]"
              alt="photo"
              class="w-full max-w-full object-cover select-none h-full max-h-full"
            />
          </button>
        </template>
      </Swiper>
    </div>
  </Container>
</template>

<script>
export default {
  props: {
    images: { type: Array, default: [] },
  },
  data() {
    return {
      current: 0,
    };
  },
};
</script>

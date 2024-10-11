<template>
  <WrapperEl>
    <div
      draggable="false"
      class=" select-none shadow-md relative group overflow-hidden cursor-pointer"
    >
      <img
        draggable="false"
        :src="project.image"
        alt="project.title"
        class="w-full h-full object-cover transition-all select-none selection:select-none group-hover:scale-105 duration-300"
      />
      <div
        class="absolute max-h-full group-hover:overflow-auto bottom-8 translate-y-full left-0 group-hover:backdrop-blur-sm bg-black/35 w-full px-2 group-hover:translate-y-0 group-hover:bottom-0 transition-all duration-300"
      >
        <p class="font-bold capitalize text-lg text-white">
          {{ project.title }}
        </p>
        <p class="text-sm mt-2 text-gray-200 whitespace-pre-wrap break-words">
          {{ project.details }}
        </p>
      </div>
    </div>
  </WrapperEl>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
};
</script>

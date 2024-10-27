<template>
  <WrapperEl class="h-fit overflow-hidden" >
    <div >
      <img draggable="false" :src="src" :alt="alt" class="w-full select-none" />
      <div class="flex">
         <Button class="flex items-center gap-2"
          ><p>{{ $t("fields.Delete") }}</p>
          <Icon icon="fa-solid fa-trash"
        /></Button>
       <Button class="flex items-center gap-2"
          ><p>{{ $t("fields.SetAsBackground") }}</p>
          <Icon icon="fa-solid fa-image"
        /></Button>
      </div>
    </div>
  </WrapperEl>
</template>

<script>
export default {
  props: {
    loading: {
      type: String,
      default: "eager",
    },
    alt: {
      type: String,
      default: "photo",
    },
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showImage: false,
    };
  },
};
</script>

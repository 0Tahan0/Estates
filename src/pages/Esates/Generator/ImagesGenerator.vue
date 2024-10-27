<template>
  <div class="p-5">
    <Title size="xl" :title="$t('ui.Attachments')" />
    <div class="grid gap-5 mt-5">
      <div class="flex flex-col gap-2">
        <Title :title="$t('ui.UploadImages')" />
        <DropZone
          :title="$t('fields.DragOrDrop')"
          :buttonText="$t('fields.SelectImage')"
          type="image/*"
          :multiSelect="true"
          @selected="handleImageUpload"
          class="h-52"
        />
      </div>
      <div v-if="estate.attachments && estate.attachments.length">
        <Gallery
          class="mt-5 h-[90dvh] max-w-full"
          :current="current"
          :elementsCount="7"
          :fullImage="false"
          :images="estate.attachments"
          @move="handleMove"
        >
          <div class="flex gap-2">
            <Button @click="setAsBackground" class="flex items-center gap-2">
              <p>{{ $t("fields.SetAsBackground") }}</p>
              <Icon icon="fa-solid fa-images" />
            </Button>
            <Button @click="deleteImage" class="flex items-center gap-2">
              <p>{{ $t("fields.Delete") }}</p>
              <Icon icon="fa-solid fa-trash" />
            </Button>
          </div>
        </Gallery>
      </div>
      <div v-else>
        <Icon icon="fa-regular fa-image" class="w-full h-32" />
        <Title size="sm" :title="$t('ui.NoImage')" align="center" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["estate"],
  data() {
    return {
      current: 0,
      currentIndex: 0,
    };
  },
  methods: {
    handleImageUpload(images) {
      if (images && images.length) {
        this.estate.attachments = [...this.estate.attachments, ...images];
      } else {
        console.error("No images uploaded.");
      }
    },
    handleMove(val) {
      if (val >= 0 && val < this.estate.attachments.length) {
        this.currentIndex = val;
      }
    },
    deleteImage() {
      if (this.estate.attachments.length > 0) {
        this.estate.attachments = this.estate.attachments.filter(
          (img) => img != this.estate.attachments[this.currentIndex]
        );

        // Adjust current index
        if (this.estate.attachments.length === 0) {
          this.currentIndex = 0;
          this.current = 0;
        } else {
          this.currentIndex = this.estate.attachments.length - 1;
          this.current = this.currentIndex;
        }
      }
    },
    setAsBackground() {
      if (
        this.estate.attachments.length > 0 &&
        this.currentIndex >= 0 &&
        this.currentIndex < this.estate.attachments.length
      ) {
        const temp = this.estate.attachments[this.currentIndex];
        this.deleteImage();

        if (temp) {
          this.estate.attachments.unshift(temp);
          this.currentIndex = 0; // Set the new current index to the background image
          this.current = 0; // Update current to the new first image
        }
      }
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>

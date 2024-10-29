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
      <div v-if="estate.attachments && estate.attachments.size">
        <Gallery
          class="mt-5 max-w-full"
          :current="current"
          :elementsCount="7"
          :fullImage="true"
          :images="Array.from(this.estate.attachments)"
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
      this.estate.attachments = new Set([...images]);
    },
    handleMove(val) {
      if (val >= 0 && val < this.estate.attachments.size) {
        this.currentIndex = val;
      }
    },
    deleteImage() {
      if (this.estate.attachments.size > 0) {
        this.estate.attachments.delete(
          Array.from(this.estate.attachments)[this.currentIndex]
        );

        // Adjust current index
        if (this.currentIndex > this.estate.attachments.size - 1) {
          this.currentIndex = this.estate.attachments.size - 1;
          this.current = this.currentIndex;
        }
      }
    },
    setAsBackground() {
      if (
        this.estate.attachments.size > 0 &&
        this.currentIndex > 0 &&
        this.currentIndex < this.estate.attachments.size
      ) {
        let temp = Array.from(this.estate.attachments)[this.currentIndex];
        if (temp) {
          this.deleteImage();
          this.estate.attachments = new Set([
            temp,
            ...Array.from(this.estate.attachments),
          ]);
          temp = null;
          this.currentIndex += 1;
        }
      }
    },
  },
};
</script>

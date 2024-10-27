<template>
  <div
    @dragenter.prevent="toggleActive(true)"
    @dragleave.prevent="toggleActive(false)"
    @drop.prevent="setVal($event)"
    @dragover.prevent
    :style="{ borderRadius: $store.getters.Rounded }"
    :class="activated"
    class="transition dark:bg-dark bg-light duration-300 font-medium capitalize md:text-base text-sm border-dashed border-2 flex flex-col justify-around items-center border-gray-500 min-h-32 "
  >
    <Title class="">{{ title }}</Title>

    <Button class="flex ring-1 dark:ring-gray-600 ring-gray-300 items-center gap-2" @click="this.$refs.uploader.click()">
      <p>{{ buttonText }}</p>

      <Icon icon="fa-solid fa-circle-arrow-up" class="h-7 rounded-full" />
    </Button>
    <input
      type="file"
      class="hidden"
      :id="uniqueID"
      @change="setVal()"
      ref="uploader"
      :multiple="multiSelect"
      :accept="accept"
    />
  </div>
</template>

<script>
export default {
  emits: ["selected"],
  props: {
    title: {
      type: String,
      default: "drag or drop file",
    },
    buttonText: {
      type: String,
      default: "select file",
    },
    draggingClass: {
      type: String,
      default: null,
    },
    accept: {
      type: String,
      default: null,
    },
    multiSelect: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      uniqueID: `file-upload-${Date.now()}`,
      isActive: false,
      files: [],
    };
  },
  computed: {
    activated() {
      return this.isActive
        ? this.draggingClass ||
            "bg-slate-100 dark:bg-slate-700 text-white border-mainColor"
        : "";
    },
  },
  methods: {
    setVal(e) {
      this.isActive = false;
      const files = e?.dataTransfer?.files || this.$refs.uploader.files;
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.readAsDataURL(files[i]);
          reader.addEventListener("load", () => this.files.push(reader.result));
        }
        this.$emit("selected", this.files);
      }
    },

    toggleActive(state) {
      this.isActive = state;
    },
  },
};
</script>

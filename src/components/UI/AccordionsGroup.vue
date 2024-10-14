<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="transition-all "
      :class="isOpen(index) ? 'ring-1 ring-darkBlue my-2':'hover:bg-gray-100 dark:hover:bg-stone-700 hover:scale-95'"
    >
      <button
        @click="toggle(index)"
        class="flex w-full items-center p-2 focus:outline-none"
      >
        <p
          class="mx-auto capitalize"
          :class="
            isOpen(index) ? 'text-mainColor border-b-2 border-mainColor' : ''
          "
        >
          {{ item.title }}
        </p>

        <Icon
          :icon="`fa-solid ${!isOpen(index) ? 'fa-plus' : 'fa-minus'}`"
          class="transition-all bg-transparent"
          :class="{ 'rotate-180': isOpen(index) }"
        />
      </button>

      <div class="p-4 transition-all bg-gray-1001" v-if="isOpen(index)">
        <Article class="text-center">{{ item.content }}</Article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      openIndex: null,
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
    isOpen(index) {
      return this.openIndex === index;
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>

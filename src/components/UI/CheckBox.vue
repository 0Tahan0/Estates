<template>
  <div class=" items-center gap-2 inline-flex">
    <input
      type="checkbox"
      id="checkbox"
      class="form-checkbox rounded-md h-4 w-4 accent-mainColor cursor-pointer"
      :checked="modelValue"
      @change="updateModelValue"
    />
    <label for="checkbox" class="cursor-pointer select-none" >{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateModelValue(event) {
      this.$emit('update:modelValue', event.target.checked);
    },
  },
};
</script>


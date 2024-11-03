<template>
  <div
    ref="parentElement"
    class="outline-none dark:bg-dark bg-light transition-all ring-1 ring-gray-500 shadow-sm justify-between flex p-0.5 text-slate-600 dark:text-gray-300 relative "
    :class="customizeFocusedStyle"
    :style="{ borderRadius: Rounded }"
    @click="handleDivClick()"
  >
    <p
      ref="label"
      v-if="label"
      class="LABEL absolute select-none capitalize transition-all before:absolute before:top-1.5 before:left-0 before:w-full before:-z-10 before:h-1.5 dark:before:bg-dark before:bg-light"
      :class="customizeFocusedLabel"
    >
      {{ label }}
    </p>
    <input
      @focus="isFocused = true"
      @blur="isFocused = false"
      @input="handleInput($event)"
      ref="inp"
      :type="fieldType"
      :min="min"
      :max="max"
      :maxlength="maxlength"
      :value="inputValue"
      :placeholder="placeholder"
      class="outline-none p-2 accent-mainColor text-inherit dark:text-white flex-grow bg-transparent placeholder:capitalize"
    />
    <button
      @click="$emit('click', $event)"
      v-if="icon"
      :class="customizeIconClass"
    >
      <Icon :icon="icon" />
    </button>
    <transition name="errorMsg">
      <p
        v-if="Boolean(validation)"
        class="bg-red-700 text-start text-white p-2 absolute top-full left-0 w-full text-xs z-10 transition-all"
      >
        {{ validation.trim() }}
      </p>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  emits: ["update:modelValue", "input", "click"],
  props: {
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    maxlength: {
      type: Number,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
      default: null, // Changed from false to null
    },
    iconClass: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: null, // Changed from false to null
    },
    validation: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: null, // Moved to be part of the object
    },
  },
  data() {
    return {
      typesAllowed: ["text", "email", "password", "number"],
      isFocused: false,
      initValue: null,
      color: null,
    };
  },
  computed: {
    ...mapGetters(["Rounded"]),
    customizeIconClass() {
      return `${this.iconClass} w-10 hover:border text-inherit`;
    },
    customizeFocusedStyle() {
      return ` ${this.isFocused ? "ring-2 ring-mainColor " : ""} ${
        this.validation ? "ring-red-500 ring-1" : ""
      }`;
    },
    customizeFocusedLabel() {
      return this.isFocused || this.modelValue || this.value
        ? " -translate-y-1/2 text-xs px-1 top-0 "
        : " top-1/2 -translate-y-1/2 ms-1";
    },
    fieldType() {
      return this.typesAllowed.includes(this.type) ? this.type : "text";
    },
    inputValue() {
      return this.modelValue !== undefined ? this.modelValue : this.value || "";
    },
  },
  methods: {
    handleDivClick() {
      // Fixed spelling
      this.$refs.inp.focus();
    },
    handleInput(e) {
      const newValue = e.target.value;
      this.$emit("update:modelValue", newValue);
      this.$emit("input", newValue);
    },
  },
  mounted() {
    const label = this.$refs?.label;
  },
};
</script>

<style scoped>
.errorMsg-enter-active,
.errorMsg-leave-active {
  transform: translateY(0%);
  opacity: 1;
}

.errorMsg-enter-from,
.errorMsg-leave-to {
  opacity: 0;
  transform: translateY(calc(-100% - 4px));
}
</style>

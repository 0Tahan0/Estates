<template>
  <div
    class="outline-none border shadow-sm justify-between flex p-0.5 text-slate-600 dark:text-gray-300 relative"
    :class="customizeFocusedStyle"
    @click="handelDivClick()"
  >
    <p
      v-if="label"
      class="absolute select-none capitalize  top-0 transition-all h-1/2 before:absolute before:top-1.5 before:left-0 before:w-full before:-z-10 before:h-1.5 before:bg-light dark:before:bg-dark"
      :class="customizeFocusedLabel"
    >
      {{ label }}
    </p>
    <input
      @focus="isFocused = true"
      @blur="isFocused = false"
      @input="handelInput($event)"
      ref="inp"
      :type="fieldType"
      :value="inputValue"
      :placeholder="placeholder"
      class="outline-none p-2 text-inherit dark:text-white flex-grow bg-transparent"
    />
    <button v-if="icon" :class="customizeIconClass">
      <Icon :icon="icon" />
    </button>
    <transition name="errorMsg">
      <p
        v-if="Boolean(validation)"
        class="bg-red-700 bg-opacity-50 text-start text-white p-2 absolute top-full left-0 w-full text-xs -z-10 transition-all"
      >
        {{ validation.trim() }}
      </p>
    </transition>
  </div>
</template>
<script>
export default {
  emits: ["update:modelValue", "input"],
  props: {
    value: {
      type: String || Number,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
      default: false,
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
      default: false,
    },
    validation: {
      type: String,
      default: "",
    },
    modelValue: String,
    default: null,
  },
  data() {
    return {
      isFocused: false,
      initValue: null,
    };
  },
  computed: {
    customizeIconClass() {
      return this.iconClass + " " + "w-10 hover:border text-inherit";
    },
    customizeFocusedStyle() {
      if (this.isFocused) return `ring-1 ${this.validation && "ring-red-500"}`;
      return `${this.validation && "ring-red-500"} ring-1`;
    },
    customizeFocusedLabel() {
      if (this.isFocused || this.modelValue || this.value)
        return " -translate-y-1/2 text-xs px-1 ";
      return " translate-y-1/2";
    },
    fieldType() {
      if (
        this.type != "text" &&
        this.type != "email" &&
        this.type != "password" &&
        this.type != "number"
      )
        return "text";
      return this.type;
    },
    inputValue() {
      if (this.modelValue) return this.modelValue;
      return this.value;
    },
  },
  methods: {
    handelDivClick() {
      this.$refs.inp.focus();
    },
    handelInput(e) {
      this.$emit("update:modelValue", e.target.value);
      //   this.$emit("input", e.target.value);
    },
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

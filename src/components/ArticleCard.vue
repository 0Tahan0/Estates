<template>
  <WrapperEl
    class="shadow-md shadow-black/20 p-5 hover:scale-105 transition-all"
  >
    <Title size="md" :title="title" class="border-b" />
    <Article>
      <slot>{{ text }}</slot>
    </Article>
  </WrapperEl>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>

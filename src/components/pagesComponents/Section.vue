<template>
  <Wrapper>
    <Title :title="title" :smallTitle="smallTitle" />
    <div class="mt-5">
      <slot></slot>
    </div>
  </Wrapper>
</template>
<script>
export default {
  props: ["title", "smallTitle"],
};
</script>

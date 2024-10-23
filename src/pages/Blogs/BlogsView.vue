<template>
      <NavBar  />  
  <PageSplitter>
    <Container>
      <Title size="xl" title="hello" />
      <BlogsGroup />
    </Container>
    <Footer />
  </PageSplitter>
</template>

<script>
import BlogsGroup from "./BlogsGroup.vue";
export default {
  components:{
    BlogsGroup,
  }
};
</script>

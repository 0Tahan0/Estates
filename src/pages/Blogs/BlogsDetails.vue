<template>
  <Wrapper>
    <Container>
      <PageSplitter>
        <!-- <WrapperEl class="me-auto inline-block shadow-transparent p-2"> -->
        <Title size="xl" :title="item?.title" />
        <Article>{{ item?.description }}</Article>
        <!-- </WrapperEl> -->
        <Wrapper>
          <ul class=" ">
            <li v-for="(prop, ind) in item?.properties" :key="ind">
              <div>
                <Title
                  v-if="prop?.title"
                  
                  class="my-2 w-fit py-2"
                  titleClass="text-mainColor dark:text-mainColor "
                  :title="prop?.title"
                  :smallTitle="prop?.description"
                />
              </div>
              <WrapperEl
                v-if="prop?.items?.length"
                class="p-3 border border-gray-500 space-y-5"
              >
                <li
                  v-for="(item, itemInd) in prop.items"
                  :key="itemInd"
                  class="space-y-5 "
                >
                  <Title
                    v-if="item?.title"
                    size="sm"
                    class="ms-3"
                    :title="item?.title"
                    :smallTitle="item?.description"
                  />
                  <ul v-if="item?.values?.length" class="list-disc ps-10">
                    <li
                      v-for="(value, valueInd) in item?.values"
                      :key="valueInd"
                    >
                      <Article>
                        {{ value?.value }}
                      </Article>
                    </li>
                  </ul>
                </li>
              </WrapperEl>
            </li>
          </ul>
        </Wrapper>
      </PageSplitter>
    </Container>
  </Wrapper>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
};
</script>

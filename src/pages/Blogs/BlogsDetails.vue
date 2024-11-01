<template>
  <Wrapper>
    <Container>
      <PageSplitter>
        <!-- <WrapperEl class="me-auto inline-block shadow-transparent p-2"> -->
        <Title size="xl" :title="item?.title" :smallTitle="item?.description" />
        <!-- </WrapperEl> -->
        <Wrapper >
          <ul class=" ">
            <li v-for="(prop, ind) in item?.properties" :key="ind">
              <div>
                <Title
                v-if="prop?.title"
                size="lg"
                class="text-mainColor dark:text-mainColor  my-2 w-fit py-2"
                :title="prop?.title"
                :smallTitle="prop?.description"
              />
              </div>
              <WrapperEl v-if="prop?.items?.length" class="p-3 border border-gray-500">
                <li v-for="(item, itemInd) in prop.items" :key="itemInd" class=" space-y-5">
                  <Title v-if="item?.title" size="md"  :title="item?.title" />
                  <ul v-if="item?.values?.length" class="list-disc ps-10 ">
                    <li
                      v-for="(value, valueInd) in item?.values"
                      :key="valueInd"
                    >
                         <Article> 

                      <Title
                        v-if="value?.value"
                        size="sm"
                        :smallTitle="value?.value"
                      />
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

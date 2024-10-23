<template>
    <Wrapper>
        
        <Container class="grid  gap-5 md:grid-cols-2 lg:grid-cols-3">
            <EstateCard
                v-for="estate in estates"
                :key="estate.id"
                :item="estate"
            />
        </Container>
    </Wrapper>
</template>

<script>
export default {
    props: {
        estates: {
            type: Array,
            default: [],
        },
    },

};
</script>

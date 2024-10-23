<template>
  <Wrapper>
    <NavBar />
    <PageSplitter>
      <Container class="grid md:grid-cols-2 gap-10 items-center">
        <Section :title="$t('ui.AboutUs')">
          <Article>
            {{ $t("uiText.AboutUsText") }}
          </Article>
        </Section>
        <div class="md:order-1 order-0 border p-1.5">
          <img
            src="../assets/images/about-us.png"
            alt="about-us-img"
            class="border"
          />
        </div>
      </Container>
      <Wrapper class="py-5">
        <Container>
          <Section :title="$t('ui.WhatWeOffer')">
            <div class="grid gap-5 md:grid-cols-3">
              <ArticleCard
                v-for="(article, ind) in articles"
                :key="ind"
                :title="article.title"
              >
                {{ article.text }}
              </ArticleCard>
            </div>
          </Section>
        </Container>
      </Wrapper>
      <div>
        <Container class="grid md:grid-cols-2 gap-10 items-center">
          <div class="border p-1.5">
            <img
              src="../assets/images/why.jpg"
              alt="about-us-img"
              class="border"
            />
          </div>
          <div class="-order-1 md:order-1">
            <Title size="xl" :title="$t('ui.WhyUs')" align="center" />
            <AccordionsGroup :items="accordions" />
          </div>
        </Container>
      </div>
      <Footer />
    </PageSplitter>
  </Wrapper>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    accordions() {
      return [
        {
          title: this.$t("ui.MarketKnowledge"),
          content: this.$t("uiText.MarketKnowledgeText"),
        },
        {
          title: this.$t("ui.ExcellentReputation"),
          content: this.$t("uiText.ExcellentReputationText"),
        },
        {
          title: this.$t("ui.AnExperience"),
          content: this.$t("uiText.AnExperienceText"),
        },
        {
          title: this.$t("ui.ExceptionalCustomerCare"),
          content: this.$t("uiText.ExceptionalCustomerCareText"),
        },
      ];
    },
    articles() {
      return [
        {
          title: this.$t("ui.PreSalesServices"),
          text: this.$t("uiText.PreSalesServicesText"),
        },
        {
          title: this.$t("ui.InvestmentServices"),
          text: this.$t("uiText.InvestmentServicesText"),
        },
        {
          title: this.$t("ui.AfterSalesServices"),
          text: this.$t("uiText.AfterSalesServicesText"),
        },
      ];
    },
  },
};
</script>

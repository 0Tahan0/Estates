<template>
  <Container>
    <div>
      <Container class="p-5">
        <Title size="xl" :title="$t('ui.GenerateEstate')" />
      </Container>

      <div class="p-2">
        <Container class="space-y-5">
          <div class="grid md:grid-cols-2 gap-5">
            <div>
              <Title
                size="sm"
                :title="`${$t('fields.Title')} (${$t('ui.Arabic')})`"
              />
              <Field type="text" v-model="estate.title_ar" />
            </div>
            <div>
              <Title
                size="sm"
                :title="`${$t('fields.Title')} (${$t('ui.English')})`"
              />
              <Field type="text" v-model="estate.title_en" />
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-5">
            <div>
              <Title
                size="sm"
                :title="`${$t('fields.Description')} (${$t('ui.Arabic')})`"
              />
              <TextArea v-model="estate.description_ar" :rows="3" />
            </div>
            <div>
              <Title
                size="sm"
                :title="`${$t('fields.Description')} (${$t('ui.English')})`"
              />
              <TextArea v-model="estate.description_en" :rows="3" />
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-5">
            <div>
              <Title size="sm" :title="$t('fields.Price')" />
              <Field type="number" :min="0" v-model="estate.price" />
            </div>
            <div>
              <Title size="sm" :title="$t('fields.CurrencyType')" />
              <Select
                class="w-full"
                optionClass="text-white"
                v-model="estate.currencyType"
              >
                <option :value="0">{{ $t("ui.TurkishPound") }}</option>
                <option :value="1">{{ $t("ui.Dollar") }}</option>
              </Select>
            </div>
            <div>
              <Title size="sm" :title="$t('fields.Situation')" />
              <Select
                classOption="p-2 dark:hover:gray-700"
                class="w-full"
                v-model="estate.situation"
              >
                <option :value="0">{{ $t("ui.ForSale") }}</option>
                <option :value="1">{{ $t("ui.ForRent") }}</option>
                <option :value="2">{{ $t("ui.UnderConstruction") }}</option>
              </Select>
            </div>
          </div>
          <div class="flex flex-wrap items-end gap-5">
            <CheckBox
              v-model="estate.isSpecial"
              :label="$t('fields.IsSpecial')"
            />
            <div class="flex-grow">
              <Title
                size="sm"
                :title="`${$t('fields.EstateType')} (${$t('ui.Arabic')})`"
              />
              <Field v-model="estate.estateType_ar" />
            </div>
            <div class="flex-grow">
              <Title
                size="sm"
                :title="`${$t('fields.EstateType')} (${$t('ui.English')})`"
              />
              <Field v-model="estate.estateType_en" />
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <Title :title="$t('ui.Location')" />
            <div class="flex gap-2">
              <Button
                :active="currentComponent == 'Manual'"
                @click="currentComponent = 'Manual'"
                class="flex items-center gap-2"
              >
                <p>{{ $t("ui.Manual") }}</p>
                <Icon icon="fa-solid fa-pen " />
              </Button>
              <Button
                class="flex items-center gap-2"
                :active="currentComponent == 'Map'"
                @click="currentComponent = 'Map'"
              >
                <p>{{ $t("ui.Map") }}</p>
                <Icon icon="fa-solid fa-map-location-dot "
              /></Button>
            </div>
            <Map
              class="h-96 md:h-[30rem]"
              v-show="currentComponent === 'Map'"
              :multiPoints="false"
              :zoom="10"
              :location="[28.9783589, 41.0082376]"
              :control="true"
              @add="handelAddLocation"
              @delete="handelDeleteLocation"
            />
            <div v-show="currentComponent === 'Manual'" class="space-y-5">
              <div>
                <Title
                  size="sm"
                  :title="`${$t('fields.Location')} (${$t('ui.Arabic')})`"
                />
                <Field v-model="estate.locationName_ar" />
              </div>
              <div>
                <Title
                  size="sm"
                  :title="`${$t('fields.Location')} (${$t('ui.English')})`"
                />
                <Field v-model="estate.locationName_en" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div class="p-2">
        <Button
          @click="generateEstate"
          class="w-full flex justify-center items-center gap-2"
        >
          <p>{{ $t("ui.GenerateEstate") }}</p>
          <Icon icon="fa-solid fa-square-plus" size="lg" />
        </Button>
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  inject: ["estate"],
  data() {
    return {
      currentComponent: "Map",
    };
  },
  methods: {
    handelAddLocation(loca) {
      console.log(loca);
      this.estate.locationName_ar = loca.locationName.place_name_ar;
      this.estate.locationName_en = loca.locationName.place_name_en;
      this.estate.location.x = loca.point.location[0];
      this.estate.location.y = loca.point.location[1];
      this.estate.location.id = loca.id;
    },
    handelDeleteLocation(loca) {
      console.log(loca);
      this.estate.locationName_ar = "";
      this.estate.locationName_en = "";
      this.estate.location.x = null;
      this.estate.location.y = null;
      this.estate.location.id = null;
    },
    generateEstate() {
      // Logic to generate the estate
      console.log("Estate generated:", this.estate);
    },
  },
};
</script>

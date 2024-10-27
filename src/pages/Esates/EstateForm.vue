<template>
  <div class="flex flex-col gap-5">
    <Title :title="$t('ui.AboutTheProject')" />
    <!-- <Field placeholder="name" />
        <Field placeholder="phone number" />
        <Field placeholder="email" />
        <Field placeholder="best time to contact" /> -->
    <Field
      v-for="(input, ind) in inputs"
      :key="input.name"
      :type="input.type"
      :label="inputsTranslations[ind]"
      :icon="input.icon"
      :validation="input.validation"
      v-model="input.value"
    />
    <TextArea :rows="3" :label="$t('fields.RequiredEstateSpecifications')" />
    <Button class="bg-mainColor dark:bg-mainColor" :disabled="fullFields">{{
      $t("fields.Send")
    }}</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: [
        {
          name: "username",
          type: "text",
          value: "",
          validation: "",
          icon: "fa-solid fa-user",
        },
        {
          name: "phone",
          type: "text",
          value: "",
          validation: "",
          icon: "fa-solid fa-phone",
        },
        {
          name: "email",
          type: "email",
          value: "",
          validation: "",
          icon: "fa-solid fa-envelope",
        },
        {
          name: "time",
          type: "text",
          value: "",
          validation: "",
          icon: "",
        },
      ],
    };
  },
  computed: {
    inputsTranslations() {
      return [
        this.$t("fields.Username"),

        this.$t("fields.PhoneNumber"),

        this.$t("fields.Email"),

        this.$t("fields.BestTimeToContact"),
      ];
    },
    fullFields() {
      return !Boolean(
        this.inputs.filter((item) => item.value != "").length ===
          this.inputs.length
      );
    },
  },
};
</script>

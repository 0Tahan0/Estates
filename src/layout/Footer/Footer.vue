<template>
  <Wrapper class="space-y-7">
    <section class="bg-mainColor">
      <Container
        class="grid md:grid-cols-2 items-center gap-5 font-bold text-white py-10"
      >
        <div class="text-center space-y-2">
          <p class="select-none text-xs md:text-sm capitalize">
            {{ $t("ui.ContactUs") }}
          </p>
          <p class="md:text-xl">00905527801274</p>
        </div>
        <div class="text-center space-y-2">
          <p class="select-none text-xs md:text-sm capitalize">
            {{ $t("fields.Email") }}
          </p>
          <p class="md:text-xl">info@masarat.site</p>
        </div>
      </Container>
    </section>
    <section>
      <Container
        class="grid py-5 gap-10 md:gap-5 text-center md:text-start md:grid-cols-3"
      >
        <div class="grid place-content-start gap-5 justify-center">
          <Title size="lg">
            {{ $t("ui.EmailService") }}
          </Title>
          <Article>
            {{ $t("uiText.EmailServiceText") }}
          </Article>
          <Field
            iconClass="bg-mainColor text-white"
            type="text"
            icon="fa-envelope fa-regular"
            :label="$t('fields.Email')"
          />
        </div>
        <div class="grid place-content-start gap-5 justify-center">
          <Title size="lg">{{ $t("ui.AboutUs") }}</Title>
          <Article>
            {{ $t("uiText.AboutUsFooterText") }}
          </Article>
          <img
            draggable="false"
            src="../../assets/images/icon.png"
            alt="logo"
            class="w-20 mx-auto select-none"
          />
        </div>
        <div class="grid place-content-start gap-5 justify-center">
          <Title size="lg">{{ $t("ui.ContactUs") }} </Title>
          <Article class="space-y-2">
            <div class="flex gap-5">
              <Icon icon="fa-solid fa-location-dot" />
              <p>{{ $t("uiText.ContactUsFooterLocation") }}</p>
            </div>
            <div class="flex justify-center md:justify-start gap-5">
              <Icon icon="fa-solid fa-phone" />
              <div class="space-y-1">
                <p>00905527801274</p>
                <p>00905527801273</p>
                <p>00902125321272</p>
              </div>
            </div>
            <div
              class="flex items-center justify-center md:justify-start gap-5"
            >
              <Icon icon="fa-solid fa-envelope" />
              <p>info@masarat.site</p>
            </div>
            <div class="flex gap-5 justify-center md:justify-start">
              <IconBtn
                icon="fa-facebook-f fa-brands"
                class="bg-blue-500 dark:ring-blue-500 text-white rounded-full"
              />
              <IconBtn
                icon=" fa-tiktok fa-brands"
                class=" bg-black text-white ring-gray-600 rounded-full"
              />
              <IconBtn
                icon=" fa-instagram fa-brands"
                class="bg-gradient-to-tr from-orange-500 via-rose-500 text-white rounded-md ring-rose-400"
              />
              <IconBtn
                icon=" fa-twitter fa-brands"
                class="bg-sky-500  text-white ring-sky-400 rounded-full"
              />
            </div>
          </Article>
        </div>
      </Container>
    </section>
  </Wrapper>
</template>

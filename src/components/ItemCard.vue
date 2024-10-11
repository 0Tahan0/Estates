<template>
<WrapperEl>
    <div
    class="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 bg-white"
  >
    <!-- الصورة -->
    <div class="relative">
      <img class="w-full h-56 object-cover" :src="img" alt="Property Image" />
      <span
        class="absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded"
        :class="isForSale ? 'bg-blue-500' : 'bg-purple-500'"
      >
        {{ isForSale ? "للبيع" : "للإيجار" }}
      </span>
    </div>

    <!-- السعر -->
    <div class="p-4">
      <h2 class="text-blue-600 text-2xl font-semibold">{{ price }}</h2>
      <!-- العنوان -->
      <p class="text-gray-600 text-sm mt-2">{{ prop.locationTitle }}</p>
      <p class="text-gray-400 text-xs">{{ prop.location }}</p>

      <!-- معلومات العقار -->
      <div class="mt-4 grid grid-cols-3 gap-4 text-center text-gray-600">
        <div v-for="prop in properties" :key="prop">
          <span class="font-semibold text-lg">{{ prop.detail }}</span>
          <p class="text-xs">{{ prop.title }}</p>
        </div>
      </div>
    </div>

    <!-- الشركة والمجمع -->
    <div
      class="border-t px-4 py-2 text-gray-600 text-sm flex justify-between items-center"
    >
      <p>{{title}}</p>
      <span class="font-bold text-blue-600">Masarat Company</span>
    </div>
  </div>
</WrapperEl>
</template>

<script>

export default {
  name: "PropertyCard",
  props: ["img", "isForSale", "properties", "price"],
};
</script>

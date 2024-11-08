<template>
  <div
    class="flex justify-between gap-4 col-span-2 bg-gray-principal rounded-lg p-8 border-gray-border border-[.0625rem]"
  >
    <div class="min-w-[280px]">
      <div class="bg-blue-gradient-one p-2 rounded-md inline-block mb-2">
        <Icon
          :icon="`lucide:${props.specialtieLogo}`"
          class="h-6 w-6 text-white"
          mode="svg"
        />
      </div>
      <div class="min-h-20">
        <h3 class="text-2xl font-semibold pb-2 min-h-16">
          {{ props.specialtiesName }}
        </h3>
        <p class="text-base text-gray-text min-h-20">
          {{ props.specialtiesDescription }}
        </p>
      </div>
      <NuxtLink
        :to="`/specialitie/${props.specialtiesName}`"
        class="flex items-center gap-2 text-sm font-semibold pt-2"
        >Ver más <Icon class="h-4 w-4" icon="lucide:arrow-right"
      /></NuxtLink>
    </div>
    <div class="w-full flex items-center justify-center">
      <img
        :src="`${config.public.strapiImage}${specialtieImage}`"
        :alt="props.specialtiesName"
        class="w-full h-[200px] object-cover rounded-lg shadow-xl"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  specialtiesName: string;
  specialtiesDescription: string;
  specialtieLogo: string;
  specialtieImage: string;
}>();

const config = useRuntimeConfig();
</script>

<style scoped></style>

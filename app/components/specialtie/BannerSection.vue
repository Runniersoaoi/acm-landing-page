<template>
  <section class="col-start-2 col-end-6 row-start-2 min-w-[1280px] py-10">
    <div class="bg-blue-gradient-one p-2 rounded-md inline-block mb-2">
      <Icon
        :icon="`lucide:${props.specialtieLogo}`"
        class="h-10 w-10 text-white"
        mode="svg"
      />
    </div>
    <h2 class="text-5xl font-semibold col-span-2 pb-3">
      {{ props.specialtiesName }}
    </h2>
    <p class="text-lg text-gray-text font-light pb-4">
      {{ props.specialtiesDescription }}
    </p>
    <div class="inline-block">
      <Button button-content="Grupo de Whatsapp" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  specialtiesName: string | undefined;
  specialtiesDescription: string | undefined;
  specialtieLogo: string | undefined;
}>();
</script>

<style></style>

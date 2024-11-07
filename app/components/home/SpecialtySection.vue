<template>
  <section
    class="col-start-2 col-end-6 row-start-3 min-w-[1280px] grid grid-cols-4 gap-5 py-10"
  >
    <div class="col-span-4 flex pb-4 items-center">
      <h2 class="text-5xl font-semibold w-3/5">
        {{ props.SpecialtyHomeSectionTitle }}
      </h2>
      <p class="w-2/5 text-gray-text text-lg font-light">
        {{ props.SpecialtyHomeSectionDescription }}
      </p>
    </div>
    <home-specialty-item-card
      v-for="specialtieItem in specialtieData"
      :key="specialtieItem.id"
      :specialtiesName="specialtieItem.specialtiesName"
      :specialties-description="specialtieItem.specialtiesDescription"
      :specialtie-image="specialtieItem.specialtieImage.url"
      :specialtie-logo="specialtieItem.specialtieLogo"
    />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  SpecialtyHomeSectionTitle: string | undefined;
  SpecialtyHomeSectionDescription: string | undefined;
}>();

const {
  data: specialtieData,
  error,
  status,
} = await useAsyncData("specialtieDataaa", async () => {
  const store = useSpecialtyStore();
  await store.get({ populate: "*" });
  return store.records;
});
</script>

<style scoped></style>

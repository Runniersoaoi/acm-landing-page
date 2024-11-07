<template>
  <specialtie-banner-section
    v-if="oneSpecialtieData"
    :specialties-name="oneSpecialtieData?.specialtiesName"
    :specialties-description="oneSpecialtieData?.specialtiesDescription"
    :specialtie-logo="oneSpecialtieData.specialtieLogo"
  />
  <specialtie-course-section :courses="oneSpecialtieData?.courses" />
</template>

<script lang="ts" setup>
interface RouteParams {
  specialitieName: string;
}

const route = useRoute();
const specialtiesName = (route.params as RouteParams).specialitieName;

const oneSpecialtieStore = useOneSpecialtyStore();
const { records: oneSpecialtieData } = storeToRefs(oneSpecialtieStore);

async function fetchHomeData() {
  await oneSpecialtieStore.get({
    populate: "*",
    filters: {
      specialtiesName: specialtiesName,
    },
  });
}
fetchHomeData();
</script>

<style></style>

<template>
  <section class="col-start-2 col-end-6 row-start-2 min-w-[1280px]">
    <blog-main-publication-section-item />
  </section>
</template>

<script setup lang="ts">
const eventStore = useEventStore();
const { records: eventData } = storeToRefs(eventStore);

async function fetchHomeData() {
  await eventStore.get({});
}
fetchHomeData();
</script>

<style scoped></style>

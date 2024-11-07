<template>
  <section></section>
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

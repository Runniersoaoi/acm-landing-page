<template>
  <section class="col-start-2 col-end-6 row-start-5 min-w-[1280px] py-10 mb-4">
    <div class="pb-8">
      <h2 class="text-5xl font-semibold col-span-2 pb-3">
        {{ props.eventPastSectionTitle }}
      </h2>
      <p class="text-lg text-gray-text font-light">
        {{ props.eventPastSectionDescription }}
      </p>
    </div>
    <event-table-past-event-section />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  eventPastSectionTitle: string | undefined;
  eventPastSectionDescription: string | undefined;
}>();
</script>

<style scoped></style>

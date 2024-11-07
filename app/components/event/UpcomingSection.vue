<template>
  <section class="col-start-2 col-end-6 row-start-4 min-w-[1280px] py-10">
    <div class="pb-8">
      <h2 class="text-5xl font-semibold col-span-2 pb-3">
        {{ props.eventIncomingSectionTitle }}
      </h2>
      <p class="text-lg text-gray-text font-light">
        {{ props.EventIncomingSectionDescription }}
      </p>
    </div>
    <home-table-event-section />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  eventIncomingSectionTitle: string | undefined;
  EventIncomingSectionDescription: string | undefined;
}>();
</script>

<style scoped></style>

<template>
  <section
    class="col-start-2 col-end-6 row-start-6 min-w-[1280px] grid grid-cols-4 pb-10 gap-5"
  >
    <div class="col-span-4 flex pb-4 flex-col">
      <h2 class="text-5xl font-semibold col-span-2 pb-3">
        {{ props.UpcomingEventHomeSectionTitle }}
      </h2>
      <p class="text-lg text-gray-text font-light">
        {{ props.UpcomingEventHomeSectionDescription }}
      </p>
    </div>
    <home-table-event-section></home-table-event-section>
    <div class="w-full col-span-4 flex items-center justify-center">
      <NuxtLink to="/events"
        ><Button
          button-content="Explora todos nuestros eventos"
          button-logo="arrow-right"
      /></NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  UpcomingEventHomeSectionTitle: string | undefined;
  UpcomingEventHomeSectionDescription: string | undefined;
}>();
</script>

<style scoped></style>

<template>
  <section class="col-start-2 col-end-6 row-start-3 min-w-[1280px] py-10">
    <h2 class="text-5xl font-semibold col-span-2 pb-6">
      {{ props.eventTrendTitle }}
    </h2>
    <div class="flex w-full justify-between gap-4">
      <div class="flex gap-4 items-center text-black-principal">
        <span class="text-9xl text-gray-text">1</span>
        <event-trend-section-card
          v-if="eventData && eventData.length > 0"
          :event-date="eventData[0]?.eventDate"
          :event-name="eventData[0]?.eventName"
        />
      </div>
      <div class="flex gap-4 items-center text-black-principal">
        <span class="text-9xl text-gray-text">2</span>
        <event-trend-section-card
          v-if="eventData && eventData.length > 0"
          :event-date="eventData[1]?.eventDate"
          :event-name="eventData[1]?.eventName"
        />
      </div>
      <div class="flex gap-4 items-center text-black-principal">
        <span class="text-9xl text-gray-text">3</span>
        <event-trend-section-card
          v-if="eventData && eventData.length > 0"
          :event-date="eventData[2]?.eventDate"
          :event-name="eventData[2]?.eventName"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  eventTrendTitle: string | undefined;
}>();

const eventStore = useEventStore();
const { records: eventData } = storeToRefs(eventStore);

async function fetchHomeData() {
  await eventStore.get({});
}
fetchHomeData();
</script>

<style scoped></style>

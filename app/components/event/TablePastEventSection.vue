<template>
  <table class="w-full">
    <thead>
      <tr>
        <th class="text-start pl-4">Evento</th>
        <th class="text-start pl-4">Cuando & Donde</th>
        <th class="text-start pl-4">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="eventItem in eventData"
        :key="eventItem.id"
        :class="`${
          (eventItem.id / 2) % 2 === 0 ? 'bg-[#121212]' : 'bg-gray-principal '
        }`"
      >
        <th
          class="text-lg font-normal text-start p-4 flex flex-col gap-1 justify-center"
        >
          <p class="text-md font-semibold">{{ eventItem.eventName }}</p>
          <div>
            <p
              class="inline text-sm bg-blue-gradient-one p-2 text-white rounded-md"
              v-if="eventItem.eventIsInPerson"
            >
              Presencial
            </p>
          </div>
        </th>
        <th class="text-sm font-normal text-start p-2">
          {{ eventItem.eventDate }}
        </th>

        <th class="p-4 max-w-4">
          <div class="bg-blue-gradient-one p-2 rounded-md w-10">
            <Icon
              icon="lucide:arrow-up-right"
              class="h-6 w-6 text-white"
              mode="svg"
            />
          </div>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
const eventStore = useEventStore();
const { records: eventData } = storeToRefs(eventStore);

async function fetchHomeData() {
  await eventStore.get({});
}
fetchHomeData();
</script>

<style></style>

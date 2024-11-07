<template>
  <table class="col-span-4">
    <thead>
      <tr>
        <th class="font-light">Evento</th>
        <th class="font-light">Cuando & Donde</th>
        <th class="font-light">Detalles</th>
        <th class="font-light">Link</th>
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
        <th class="text-lg font-normal text-start p-4 flex flex-col gap-1">
          <p class="text-md font-semibold">{{ eventItem.eventName }}</p>
          <div>
            <p
              class="inline text-sm bg-blue-gradient-one p-2 text-white font-medium rounded-md"
              v-if="eventItem.eventIsInPerson"
            >
              Presencial
            </p>
          </div>
        </th>
        <th class="text-sm font-normal text-start p-2">
          {{ eventItem.eventDate }}
        </th>
        <th class="text-sm font-normal text-start p-2">
          {{ truncateText(eventItem.eventDescription, 50) }}
        </th>
        <th class="p-4">
          <NuxtLink :to="`/events/${eventItem.eventName}`"
            ><div class="bg-blue-gradient-one p-2 rounded-md">
              <Icon
                icon="lucide:arrow-up-right"
                class="h-6 w-6 text-white"
                mode="svg"
              /></div
          ></NuxtLink>
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

// Función para truncar el texto basado en palabras
function truncateText(text: string, wordLimit: number): string {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
}
</script>

<style></style>

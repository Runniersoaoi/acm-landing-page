<template>
  <section
    class="col-start-2 col-end-6 row-start-2 pb-4 min-w-[1280px] grid grid-cols-4 pt-10 border-b border-gray-border gap-10"
  >
    <div class="col-span-3">
      <h2 class="text-5xl pb-4 text-blue-gradient-one font-semibold">
        {{ props.eventName }}
      </h2>
      <p class="text-gray-text text-sm pb-8">
        {{ props.eventDescription }}
      </p>
    </div>
    <div
      class="bg-gray-principal p-4 rounded-md border-gray-border border h-40"
    >
      <div class="border-b border-gray-border">
        <p class="text-lg text-gray-text font-semibold pb-2">Fecha limite</p>
        <p class="text-sm text-gray-text font-semibold pb-2">
          {{ props.eventDeadline }}
        </p>
      </div>
      <div class="grid grid-cols-2 py-4">
        <div class="flex gap-2">
          <span
            ><Icon
              icon="lucide:message-circle-more"
              class="h-6 w-6 text-white"
              mode="svg"
          /></span>
          <p>{{ props.eventIsInPerson ? "Presencial" : "Virtual" }}</p>
        </div>
        <div class="flex gap-2">
          <span
            ><Icon
              icon="lucide:person-standing"
              class="h-6 w-6 text-white"
              mode="svg"
          /></span>
          <p>Público</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  eventName: string | undefined;
  eventDeadline: Date | undefined;
  eventIsInPerson: boolean | undefined;
  eventDescription: string | undefined;
}>();
</script>

<style></style>

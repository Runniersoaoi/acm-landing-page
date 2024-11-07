<template>
  <div
    class="bg-gray-principal rounded-md p-3 max-w-[250px] flex flex-col justify-between h-full text-white"
  >
    <div>
      <img src="/image/event-page-port-1.jpg" alt="" class="rounded-md" />
    </div>
    <div class="flex flex-col items-start h-full">
      <h3 class="text-gray-text text-xl font-semibold py-2">
        {{ props.eventName }}
      </h3>
      <p class="text-gray-text font-light">{{ props.eventDate }}</p>
    </div>
    <div class="w-full flex justify-end">
      <NuxtLink class="flex items-center gap-2 text-sm font-semibold pt-2"
        >Ver detalles <Icon class="h-4 w-4" icon="lucide:arrow-right"
      /></NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  eventName: string | undefined;
  eventDate: Date | undefined;
}>();
</script>

<style></style>

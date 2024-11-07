<template>
  <div
    class="col-span-1 bg-gray-principal border-gray-border border rounded-md p-4"
  >
    <img
      :src="`${config.public.strapiImage}${courseImage}`"
      :alt="props.courseName"
      class="h-[250px] w-full object-cover rounded-md border border-gray-border"
    />
    <p class="py-2 font-light text-gray-text">{{ courseDate }}</p>
    <h3 class="font-semibold text-2xl min-h-[70px]">
      {{ props.courseName }}
    </h3>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  courseName: string;
  courseDate: Date;
  courseImage: string;
}>();

const config = useRuntimeConfig();
</script>

<style></style>

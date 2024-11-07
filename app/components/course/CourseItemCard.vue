<template>
  <div class="bg-gray-principal p-4 rounded-md border border-gray-border">
    <div>
      <img
        :src="`${config.public.strapiImage}${courseImage}`"
        :alt="props.courseName"
        class="h-52 object-cover rounded-md border border-gray-border"
      />
    </div>
    <div class="py-4">
      <p class="pb-2 font-light text-gray-text">{{ props.courseDate }}</p>
      <h4 class="font-semibold text-2xl min-h-[70px]">
        {{ props.courseName }}
      </h4>
      <p class="text-sm">{{ props.courseDescription }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

const props = defineProps<{
  courseName: string;
  courseDescription: string;
  courseDate: Date;
  courseImage: string;
}>();
</script>

<style></style>

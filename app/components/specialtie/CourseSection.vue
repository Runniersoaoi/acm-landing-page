<template>
  <section class="col-start-2 col-end-6 row-start-3 py-10">
    <h3 class="text-5xl font-semibold col-span-2 pb-6">Ruta de aprendizaje</h3>
    <div class="grid-cols-3 grid gap-5">
      <div
        v-for="course in props.courses"
        :key="course.id"
        class="bg-gray-principal border-gray-border border rounded-md p-4 inline-block"
      >
        <div class="min-h-[130px]">
          <p class="py-2 font-light text-gray-text">{{ course.courseDate }}</p>
          <h3 class="font-semibold text-2xl">{{ course.courseName }}</h3>
          <p class="py-2 font-light text-gray-text">
            {{ course.courseDescription }}
          </p>
        </div>
        <NuxtLink
          class="flex items-center justify-end gap-2 text-sm font-semibold pt-2"
          >Ver más <Icon class="h-4 w-4" icon="lucide:arrow-right"
        /></NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

const props = defineProps<{
  courses: Course[] | undefined;
}>();
</script>

<style></style>

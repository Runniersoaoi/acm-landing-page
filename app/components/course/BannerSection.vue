<template>
  <section
    class="col-start-2 col-end-6 row-start-2 min-w-[1280px] min-h-[540px] flex flex-col justify-center"
  >
    <h3 class="text-7xl pb-4 text-blue-gradient-one font-semibold">
      {{ props.coursePageTitle }}
    </h3>
    <p class="text-gray-text text-lg max-w-[500px] pb-12">
      {{ props.coursePageDescription }}
    </p>
    <div
      class="bg-gray-principal flex w-7/12 justify-between rounded-md border border-gray-border py-4"
    >
      <div
        class="p-4 pr-11 border-r border-r-gray-border flex items-start justify-center flex-col"
      >
        <p class="pb-4 font-semibold">ULTIMO CURSO</p>
        <p class="text-gray-text text-lg">Fundamentos de HTML y CSS</p>
      </div>
      <div
        class="p-4 pr-11 border-r border-r-gray-border flex items-start justify-center flex-col"
      >
        <p class="pb-4 font-semibold">CUANDO</p>
        <p class="text-gray-text text-lg">18 de Septiembre, 2024</p>
      </div>
      <div class="flex items-start justify-center flex-col px-6">
        <a
          class="text-black font-semibold bg-white rounded-lg text-sm shadow-custom-complex flex items-center py-4 px-6 gap-1 font-opsz-50"
          href=""
          >Ver curso</a
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  coursePageTitle: string | undefined;
  coursePageDescription: string | undefined;
}>();
</script>

<style></style>

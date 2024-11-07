<template>
  <section
    class="col-start-2 col-end-6 row-start-5 min-w-[1280px] flex gap-10 py-10 border-b border-gray-border mb-10"
  >
    <div class="w-1/2">
      <h3 class="text-gray-text pb-6">MISIÓN</h3>
      <p class="text-lg text-gray-text">{{ props.ourMision }}</p>
    </div>
    <div class="w-1/2">
      <h3 class="text-gray-text pb-6">VISIÓN</h3>
      <p class="text-lg text-gray-text">{{ props.ourVision }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  ourMision: string | undefined;
  ourVision: string | undefined;
}>();
</script>

<style></style>

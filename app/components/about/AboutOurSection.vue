<template>
  <section
    class="col-start-2 col-end-6 row-start-3 min-w-[1280px] py-10 border-b border-gray-border"
  >
    <h3 class="text-gray-text pb-6">¿QUIENES SOMOS?</h3>
    <p class="text-3xl font-medium">{{ props.aboutWhoWeAre }}</p>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  aboutWhoWeAre: string | undefined;
}>();
</script>

<style></style>

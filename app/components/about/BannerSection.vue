<template>
  <section class="col-start-2 col-end-6 row-start-2 min-w-[1280px]">
    <p class="pt-12 pb-8 font-medium text-gray-text">ACERCA DE NOSOTROS</p>
    <h2 class="pb-8 text-6xl font-inter font-semibold w-4/5 text-start z-40">
      {{ props.aboutTitle }}
    </h2>
    <img
      src="/image/about-banner.jpg"
      alt="banner pagina about"
      class="object-cover h-96 w-full rounded-md border border-gray-border"
    />
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  aboutTitle: string | undefined;
}>();
</script>

<style></style>

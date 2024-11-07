<template>
  <section
    class="col-start-2 col-end-6 row-start-3 grid grid-cols-4 min-w-[1280px] min-h-[540px] py-10 md-section mb-6"
  >
    <div class="col-start-1 col-end-4">
      <h3 class="col-start-1 col-end-4 font-semibold mb-5">Requisitos</h3>
      <StrapiBlocks :content="props.eventRequirements" />
    </div>

    <h3 class="col-start-1 col-end-4 font-semibold mb-5">Premios</h3>
    <div class="col-start-1 col-end-4 grid grid-cols-2 gap-5 pb-6">
      <div class="border border-gray-border p-4 rounded-md bg-gray-principal">
        <StrapiBlocks :content="props.eventPrizes1" />
      </div>
      <div class="border border-gray-border p-4 rounded-md bg-gray-principal">
        <StrapiBlocks :content="props.eventPrizes2" />
      </div>
      <div class="border border-gray-border p-4 rounded-md bg-gray-principal">
        <StrapiBlocks :content="props.eventPrizes3" />
      </div>
      <div class="border border-gray-border p-4 rounded-md bg-gray-principal">
        <StrapiBlocks :content="props.eventPrizes4" />
      </div>
      <div class="border border-gray-border p-4 rounded-md bg-gray-principal">
        <StrapiBlocks :content="props.eventPrizes5" />
      </div>
      <div class="border border-gray-border p-4 rounded-md bg-gray-principal">
        <StrapiBlocks :content="props.eventPrizes6" />
      </div>
    </div>

    <h3 class="col-start-1 col-end-4 font-semibold mb-3">
      Criterios de calificación
    </h3>
    <div class="col-start-1 col-end-4">
      <StrapiBlocks :content="props.eventJudgingCriteria" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { StrapiBlocks } from "vue-strapi-blocks-renderer";
const props = defineProps<{
  eventDescription: string | any;
  eventRequirements: object | any;
  eventPrizes1: object | any;
  eventPrizes2: object | any;
  eventPrizes3: object | any;
  eventPrizes4: object | any;
  eventPrizes5: object | any;
  eventPrizes6: object | any;
  eventJudgingCriteria: object | any;
}>();
</script>

<style></style>

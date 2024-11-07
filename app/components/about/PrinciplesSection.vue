<template>
  <section
    class="col-start-2 col-end-6 row-start-4 min-w-[1280px] py-10 flex gap-2 border-b border-gray-border"
  >
    <div>
      <h3 class="text-4xl font-semibold w-4/5 pb-3">
        Nuestros principios fundamentales
      </h3>
      <p class="text-lg text-gray-text w-11/12">
        {{ props.aboutOurPrinciples }}
      </p>
    </div>
    <div>
      <ul class="text-2xl">
        <li class="list-decimal">{{ props.ourPrinciple1 }}</li>
        <li class="list-decimal">{{ props.ourPrinciple2 }}</li>
        <li class="list-decimal">{{ props.ourPrinciple3 }}</li>
        <li class="list-decimal">{{ props.ourPrinciple1 }}</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  aboutOurPrinciples: string | undefined;
  ourPrinciple1: string | undefined;
  ourPrinciple2: string | undefined;
  ourPrinciple3: string | undefined;
  ourPrinciple4: string | undefined;
}>();
</script>

<style></style>

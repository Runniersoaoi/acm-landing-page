<template>
  <section class="col-start-2 col-end-6 row-start-7 min-w-[1280px] pb-10">
    <div>
      <h2 class="text-3xl font-semibold">
        {{ props.ContactHomeSectionTitle }}
      </h2>
      <p class="text-sm">{{ props.ContactHomeSectionDescription }}</p>
      <br />
      <p class="text-xl font-semibold">
        {{ props.ContactHomeSectionPhoneNumber }}
      </p>
      <br />
      <p class="text-lg">{{ props.ContactHomeSectionEmail }}</p>
    </div>
    <div><contact-form></contact-form></div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  ContactHomeSectionTitle: string | undefined;
  ContactHomeSectionDescription: string | undefined;
  ContactHomeSectionPhoneNumber: string | undefined;
  ContactHomeSectionEmail: string | undefined;
}>();
</script>

<style scoped></style>

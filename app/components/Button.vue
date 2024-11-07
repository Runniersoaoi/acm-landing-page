<template>
  <NuxtLink
    :to="props.buttonUrl"
    style="background: linear-gradient(to bottom, #146ef5, #0271d0, #146ef5)"
    class="text-white bg-blue-gradient-one rounded-lg text-sm shadow-custom-complex flex items-center py-4 px-6 gap-1 font-opsz-50"
  >
    <div class="font-semibold">{{ props.buttonContent }}</div>
    <Icon
      v-if="buttonLogo"
      :icon="`lucide:${props.buttonLogo}`"
      class="h-5 w-5 text-white"
      mode="svg"
    />
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  buttonContent: string;
  buttonLogo?: string;
  buttonUrl?: string;
}>();
</script>

<style></style>

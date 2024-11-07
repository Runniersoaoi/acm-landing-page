<template>
  <Icon v-bind="props" />
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { IconifyIconProps } from "@iconify/vue";

const props = defineProps<IconifyIconProps>();
</script>

<style scoped></style>

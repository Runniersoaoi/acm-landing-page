<template>
  <div class="flex flex-col gap-1">
    <Icon icon="lucide:mouse-pointer-2" class="h-4 w-4" mode="svg" />
    <p
      :style="{ borderColor: props.borderColor }"
      :class="`border-2 rounded-xl text-xs p-1 `"
    >
      {{ props.userName }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  userName: string;
  borderColor: string;
}>();
</script>

<style></style>

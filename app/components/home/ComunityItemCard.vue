<template>
  <div
    class="flex col-span-2 bg-gray-principal border-gray-border border-[.0625rem] rounded-md p-4 gap-5"
  >
    <div>
      <img
        class="h-[150px] rounded-md border-gray-border border-[.0625rem]"
        :src="`${config.public.strapiImage}${memberImage}`"
        :alt="props.member_name"
      />
    </div>
    <div class="flex flex-col justify-around py-8">
      <p class="text-sm text-gray-text">Desarrollo Web</p>
      <h4 class="text-2xl font-semibold">{{ props.member_name }}</h4>
      <p class="text-base text-gray-text">
        Huancayo, Perú - {{ props.memberCicle }}vo ciclo
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  member_name: string;
  memberGitHubLink: string;
  memberLinkedInLink: string;
  memberDescription: string;
  memberDni: number;
  memberImage: string;
  memberCicle: number;
}>();

const config = useRuntimeConfig();
</script>

<style></style>

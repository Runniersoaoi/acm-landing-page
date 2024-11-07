<template>
  <div class="bg-gray-principal border-gray-border border p-2 rounded-lg">
    <div>
      <img
        :src="`${config.public.strapiImage}${memberImage}`"
        :alt="props.member_name"
        class="w-full h-[200px] object-cover rounded-lg"
      />
    </div>
    <div class="py-4 px-2">
      <p class="text-sm text-gray-text">{{ props.memberSpeciality }}</p>
      <h3 class="text-xl font-semibold py-1">{{ props.member_name }}</h3>

      <p class="text-gray-text font-lg">
        Huancayo, Perú - {{ props.memberCicle }}vo ciclo
      </p>
    </div>
    <div class="flex w-full items-end justify-end pr-2 pb-1">
      <a :href="props.memberGitHubLink"><icons-github-icon /></a>
      <a :href="props.memberLinkedInLink"><icons-linked-in-icon /></a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  member_name: string;
  memberGitHubLink: string;
  memberLinkedInLink: string;
  memberCicle: number;
  memberImage: string;
  memberSpeciality: string;
}>();

const config = useRuntimeConfig();
</script>

<style></style>

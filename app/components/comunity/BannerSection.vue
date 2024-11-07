<template>
  <section
    class="col-start-2 col-end-6 row-start-2 min-w-[1280px] min-h-[540px] flex flex-col items-center gap-4 justify-center"
  >
    <div class="w-1/2 text-center pt-16">
      <h2 class="text-6xl pb-4 text-blue-gradient-one font-semibold">
        {{ props.comunityBannerTitle }}
      </h2>
      <p class="text-gray-text text-lg">
        {{ props.comunityBannerDescription }}
      </p>
    </div>
    <div class="pb-12"><Button button-content="Discord ACM" /></div>
    <comunity-banner-svg class="w-[1280px]" />
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  comunityBannerTitle: string | undefined;
  comunityBannerDescription: string | undefined;
  comunityDiscordLink: string | undefined;
}>();
</script>

<style></style>

// font-semibold bg-gradient-to-r from-blue-gradient-one to-blue-gradient-two
bg-clip-text text-transparent

<template>
  <comunity-banner-section
    :comunity-banner-title="
      comunityPageData?.ComunityMember.ComunityBannerTitle
    "
    :comunity-banner-description="
      comunityPageData?.ComunityMember.ComunityBannerDescription
    "
    :comunity-discord-link="
      comunityPageData?.ComunityMember.comunityDiscordLink
    "
  />
  <comunity-member-section />
</template>

<script lang="ts" setup>
const {
  data: comunityPageData,
  error,
  status,
} = await useAsyncData("comunityPageData", async () => {
  const store = useComunityPageStore();
  await store.get({ populate: "*" });
  return store.records;
});
</script>

<style></style>

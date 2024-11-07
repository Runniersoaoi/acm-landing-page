<template>
  <about-banner-section :about-title="aboutData?.aboutTitle" />
  <about-our-section :about-who-we-are="aboutData?.aboutWhoWeAre" />
  <about-principles-section
    :about-our-principles="aboutData?.aboutOurPrinciples"
    :our-principle1="aboutData?.ourPrinciple1"
    :our-principle2="aboutData?.ourPrinciple2"
    :our-principle3="aboutData?.ourPrinciple3"
    :our-principle4="aboutData?.ourPrinciple4"
  />
  <about-vision-mision-section
    :our-mision="aboutData?.ourMision"
    :our-vision="aboutData?.ourVision"
  />
</template>

<script lang="ts" setup>
const {
  data: aboutData,
  error,
  status,
} = await useAsyncData("about", async () => {
  const store = useAboutStore();
  await store.get({ populate: "*" });
  return store.records;
});
</script>

<style></style>

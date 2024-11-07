<template>
  <home-banner-section
    :BannerHomeTitle="homeData?.BannerHomeSection.BannerHomeTitle"
  />
  <home-specialty-section
    :SpecialtyHomeSectionDescription="
      homeData?.SpecialtyHomeSection.SpecialtyHomeSectionDescription
    "
    :SpecialtyHomeSectionTitle="
      homeData?.SpecialtyHomeSection.SpecialtyHomeSectionTitle
    "
  />
  <home-couse-section
    :CourseHomeSectionDescription="
      homeData?.CourseHomeSection.CourseHomeSectionDescription
    "
    :CourseHomeSectionTitle="homeData?.CourseHomeSection.CourseHomeSectionTitle"
  />
  <home-comunity-section
    :MemberHomeSectionDescription="
      homeData?.MemberHomeSection.MemberHomeSectionDescription
    "
    :MemberHomeSectionTitle="homeData?.MemberHomeSection.MemberHomeSectionTitle"
  >
  </home-comunity-section>
  <home-event-section
    :UpcomingEventHomeSectionTitle="
      homeData?.UpcomingEventHomeSection.UpcomingEventHomeSectionTitle
    "
    :UpcomingEventHomeSectionDescription="
      homeData?.UpcomingEventHomeSection.UpcomingEventHomeSectionDescription
    "
  ></home-event-section>
  <!-- <home-contact-section
    :ContactHomeSectionTitle="
      homeData?.ContactHomeSection.ContactHomeSectionTitle
    "
    :ContactHomeSectionDescription="
      homeData?.ContactHomeSection.ContactHomeSectionDescription
    "
    :ContactHomeSectionPhoneNumber="
      homeData?.ContactHomeSection.ContactHomeSectionPhoneNumber
    "
    :ContactHomeSectionEmail="
      homeData?.ContactHomeSection.ContactHomeSectionEmail
    "
  /> -->
</template>

<script lang="ts" setup>
const {
  data: homeData,
  error,
  status,
} = await useAsyncData("home", async () => {
  const store = useHomeStore();
  await store.get({ populate: "*" });
  return store.records;
});
</script>

<style></style>

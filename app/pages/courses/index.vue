<template>
  <course-banner-section
    :course-page-title="coursePageData?.coursePageTitle"
    :course-page-description="coursePageData?.coursePageDescription"
  />
  <course-section />
</template>

<script lang="ts" setup>
const coursePageStore = useCoursePageStore();
const { records: coursePageData } = storeToRefs(coursePageStore);

async function fetchHomeData() {
  await coursePageStore.get({ populate: "*" });
}
fetchHomeData();
</script>

<style></style>

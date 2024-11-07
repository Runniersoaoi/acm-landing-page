<template>
  <pre>{{ oneCourseData }}</pre>
</template>

<script lang="ts" setup>
interface RouteParams {
  courseName: string;
}

const route = useRoute();
const courseName = (route.params as RouteParams).courseName;

const oneCourseStore = useOneCourseStore();
const { records: oneCourseData } = storeToRefs(oneCourseStore);

async function fetchHomeData() {
  await oneCourseStore.get({
    populate: "*",
    filters: {
      specialtiesName: courseName,
    },
  });
}
fetchHomeData();
</script>

<style scoped></style>

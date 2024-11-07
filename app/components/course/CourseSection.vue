<template>
  <section class="col-start-2 col-end-6 row-start-3 min-w-[1280px] py-10">
    <div>
      <h3 class="text-5xl font-semibold col-span-2 pb-10">
        Busca uno de nuestros cursos
      </h3>
    </div>
    <div class="grid grid-cols-4 gap-5">
      <course-item-card
        v-for="course in courseData"
        :key="course.id"
        :course-name="course.courseName"
        :course-description="course.courseDescription"
        :course-image="course.courseImage.url"
        :course-date="course.courseDate"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const courseStore = useCourseStore();
const { records: courseData } = storeToRefs(courseStore);

async function fetchHomeData() {
  await courseStore.get({ populate: "*" });
}
fetchHomeData();
</script>

<style></style>

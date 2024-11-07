<template>
  <section
    class="col-start-2 col-end-6 row-start-4 min-w-[1280px] grid grid-cols-4 pb-10 gap-5"
  >
    <div class="col-span-4 flex pb-4 flex-col">
      <h2 class="text-5xl font-semibold col-span-2 pb-3">
        {{ props.CourseHomeSectionTitle }}
      </h2>
      <p class="text-lg text-gray-text font-light">
        {{ props.CourseHomeSectionDescription }}
      </p>
    </div>
    <div class="col-span-4">
      <Swiper
        :modules="[SwiperAutoplay, SwiperGrid]"
        :slides-per-view="4"
        :space-between="20"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="courseItem in courseData" :key="courseItem.id">
          <home-course-item-card
            :course-name="courseItem.courseName"
            :course-date="courseItem.courseDate"
            :course-image="courseItem.courseImage.url"
          ></home-course-item-card>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="w-full col-span-4 flex items-center justify-center">
      <Button
        button-content="Explora todos nuestros cursos"
        button-logo="arrow-right"
        button-url="/courses"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  CourseHomeSectionTitle: string | undefined;
  CourseHomeSectionDescription: string | undefined;
}>();

const courseStore = useCourseStore();
const { records: courseData } = storeToRefs(courseStore);

async function fetchHomeData() {
  await courseStore.get({ populate: "*" });
}
fetchHomeData();
</script>

<style scoped></style>

<template>
  <section
    class="col-start-2 col-end-6 row-start-5 min-w-[1280px] grid grid-cols-4 pb-10 gap-5"
  >
    <div class="col-span-4 flex pb-4 flex-col">
      <h2 class="text-5xl font-semibold col-span-2 pb-3">
        {{ props.MemberHomeSectionTitle }}
      </h2>
      <p class="text-lg text-gray-text font-light">
        {{ props.MemberHomeSectionDescription }}
      </p>
    </div>
    <div class="col-span-4" v-if="memberData">
      <Swiper
        :modules="[SwiperAutoplay, SwiperGrid]"
        :slides-per-view="3"
        :space-between="20"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="memberItem in memberData" :key="memberItem.id">
          <home-comunity-item-card
            :member_name="memberItem.member_name"
            :member-description="memberItem.memberDescription"
            :member-git-hub-link="memberItem.memberGitHubLink"
            :member-linked-in-link="memberItem.memberLinkedInLink"
            :member-dni="memberItem.memberDni"
            :member-image="memberItem.memberImage.url"
            :member-cicle="memberItem.memberCicle"
          ></home-comunity-item-card>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="w-full col-span-4 flex items-center justify-center">
      <NuxtLink to="/comunity"
        ><Button
          button-content="Conoce a toda la comunidad"
          button-logo="arrow-right"
      /></NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  MemberHomeSectionTitle: string | undefined;
  MemberHomeSectionDescription: string | undefined;
}>();

const memberStore = useMemberStore();
const { records: memberData } = storeToRefs(memberStore);

async function fetchHomeData() {
  await memberStore.get({ populate: "*" });
}
fetchHomeData();
</script>

<style scoped></style>

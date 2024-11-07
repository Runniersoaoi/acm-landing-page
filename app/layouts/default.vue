<template>
  <div class="grid grid-cols-[auto_320px_320px_320px_320px_auto]">
    <Navbar></Navbar>
    <slot />
    <div
      class="row-start-8 col-start-1 col-end-7 flex flex-col justify-center items-center"
    >
      <Footer
        :FotterHomeSectionTitle="
          homeData?.FotterHomeSection.FotterHomeSectionTitle
        "
        :FotterHomeSectionDescription="
          homeData?.FotterHomeSection.FotterHomeSectionDescription
        "
      ></Footer>
      <div
        class="w-full h-11 flex bg-black-bg-principal border-t border-gray-border text-white items-center justify-center"
      >
        <div class="min-w-[1280px] flex justify-between items-center">
          <p class="text-sm font-light">
            Copyright ©2024 ACM-Universidad Continental 
          </p>

          <div class="flex gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61566246254675"
              target="_blanck"
              ><icons-facebook-icon
            /></a>
            <a
              href="https://www.instagram.com/acmsistemas2?igsh=cGw5Z2Z5aGoyZGZw&utm_source=qr"
              target="_black"
              ><icons-instagram-icon
            /></a>
            <a href="https://www.tiktok.com/@acmconti" target="_blanck"
              ><icons-tiktok-icon
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
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

<template>
  <section class="col-start-2 col-end-6 row-start-2 min-w-[1280px]">
    <div class="flex justify-center items-center flex-col gap-4 mt-4 mb-5">
      <div class="h-full">
        <div
          class="grid-cols-[auto_1fr_1fr_auto] grid justify-items-center pb-2"
        >
          <div class="flex items-center">
            <MouseUser userName="Programador" borderColor="#146ef5" />
          </div>
          <div class="col-span-2 items-center flex flex-col gap-6 pt-10">
            <h1 class="text-7xl font-inter font-semibold w-5/5 text-center">
              <span class="text-blue-gradient-one">
                {{ firstTwoWords }}
              </span>
              <span> {{ `  ` + remainingWords }}</span>
            </h1>
            <div><Button buttonContent="Unete a nosotros" /></div>
          </div>
          <div class="flex items-center">
            <MouseUser userName="Desarrollador" borderColor="#146ef5" />
          </div>
          <div class="col-start-2">
            <MouseUser userName="Diseñador UX" borderColor="#146ef5" />
          </div>
          <div><MouseUser userName="Diseñador UI" borderColor="#146ef5" /></div>
        </div>
        <div class="flex justify-center my-8"><brand-bar /></div>
      </div>
    </div>
    <div class="h-[229px] bg-black">
      <img
        class="h-full w-full object-cover"
        src="/image/banner-home.jpg"
        alt=""
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  BannerHomeTitle: string | undefined;
}>();

const firstTwoWords = computed(() => {
  const words = props.BannerHomeTitle?.split(" ");
  return words && words.length >= 2 ? words.slice(0, 2).join(" ") : "";
});

const remainingWords = computed(() => {
  const words = props.BannerHomeTitle?.split(" ");
  return words && words.length > 2 ? words.slice(2).join(" ") : "";
});
</script>

<style></style>

// bg-gradient-to-r from-blue-gradient-one to-blue-gradient-two bg-clip-text
text-transparent

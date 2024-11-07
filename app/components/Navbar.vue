<template>
  <header
    class="col-start-1 col-span-6 flex h-16 justify-center items-center w-full sticky top-0 z-50 border-b-2 bg-black-bg-principal border-gray-principal"
  >
    <div class="min-w-[1280px] flex justify-between items-center">
      <div>
        <NuxtLink to="/home"
          ><img src="/image/acm-continental-logo-white.png" alt=""
        /></NuxtLink>
      </div>
      <ul class="flex gap-8 text-sm">
        <!-- <li v-for="pageLink in pageLinkData" :key="pageLink?.id">
        <NuxtLink :to="`/${pageLink.pageLink}`">{{
          pageLink?.pageName
        }}</NuxtLink>
      </li> -->
        <li><NuxtLink to="/home">Inicio</NuxtLink></li>

        <!-- <li><NuxtLink to="/blog">Blog</NuxtLink></li> -->
        <li><NuxtLink to="/comunity">Comunidad</NuxtLink></li>
        <li><NuxtLink to="/events">Eventos</NuxtLink></li>
        <li><NuxtLink to="/about">Sobre nosotros</NuxtLink></li>
      </ul>
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
  </header>
</template>

<script setup lang="ts">
// const pageLinkStore = usePageLinkStore();
// const { records: pageLinkData } = storeToRefs(pageLinkStore);

// async function fetchHomeData() {
//   await pageLinkStore.get({});
// }
// fetchHomeData();
</script>

<style scoped>
.router-link-active {
  @apply underline;
}
.router-link-exact-active {
  @apply underline;
}
</style>

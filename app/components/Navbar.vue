<template>
  <header
    class="col-start-2 col-end-6 flex justify-between h-16 items-center px-5 max-w-7xl sticky top-0 z-50 border-b-2 bg-black-bg-principal border-gray-principal"
  >
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
    <div>Images</div>
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

<style scoped></style>

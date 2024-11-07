<template>
  <footer class="flex flex-col gap-5 min-w-[1280px] pb-4">
    <div class="w-full flex justify-between">
      <div class="w-1/3">
        <img
          class="h-16 mb-4"
          src="/image/logo-universidad-continental-blanco.png"
          alt="logo-universidad-continental"
        />
        <h3 class="text-2xl font-medium pb-1">
          {{ props.FotterHomeSectionTitle }}
        </h3>
        <p class="text-sm text-gray-text">
          {{ props.FotterHomeSectionDescription }}
        </p>
      </div>
      <div class="flex gap-14">
        <div>
          <div class="font-medium pb-2">NAVEGACIÓN</div>
          <div class="flex flex-col text-gray-text">
            <!-- <NuxtLink v-for="pageLink in pageLinkData" :key="pageLink.id">
              {{ pageLink.pageName }}
            </NuxtLink> -->
            <NuxtLink to="/home">Inicio</NuxtLink>

            <!-- <NuxtLink to="/blog">Blog</NuxtLink> -->
            <NuxtLink to="/comunity">Comunidad</NuxtLink>
            <NuxtLink to="/events">Eventos</NuxtLink>
            <NuxtLink to="/about">Sobre nosotros</NuxtLink>
          </div>
        </div>
        <div>
          <div class="font-medium pb-2">LEGAL & CUMPLIMIENTO</div>
          <div class="text-gray-text">Politica de privacidad</div>
          <div class="text-gray-text">Terminos & Condiciones</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps<{
  FotterHomeSectionTitle: string | undefined;
  FotterHomeSectionDescription: string | undefined;
}>();

// const pageLinkStore = usePageLinkStore();
// const { records: pageLinkData } = storeToRefs(pageLinkStore);

// async function fetchHomeData() {
//   await pageLinkStore.get({});
// }
// fetchHomeData();
</script>

<style scoped></style>

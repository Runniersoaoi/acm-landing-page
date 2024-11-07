<template>
  <section
    class="col-start-2 col-end-6 row-start-2 min-w-[1280px] flex min-h-[550px] justify-center items-center px-4 gap-4"
  >
    <div class="w-1/3 flex flex-col gap-4">
      <h2 class="text-5xl font-semibold text-blue-gradient-one">
        {{ props.eventMainTitle }}
      </h2>
      <p class="w-2/3 text-gray-text text-lg">
        {{ props.eventMainDescription }}
      </p>
      <div class="flex gap-5">
        <MouseUser userName="Programador" borderColor="#146ef5" />
        <MouseUser
          class="mt-10"
          userName="Desarrollador"
          borderColor="#146ef5"
        />
        <MouseUser userName="Diseñador UX" borderColor="#146ef5" />
        <MouseUser
          class="-mt-10"
          userName="Diseñador UI"
          borderColor="#146ef5"
        />
      </div>
    </div>
    <div class="grid-cols-2 grid h-[500px] gap-4 grid-rows-5 w-2/3">
      <div class="row-start-1 row-end-4 col-start-1 col-end-2">
        <img
          class="object-cover w-full h-full rounded-lg hover:scale-105 transition duration-300 ease-in-out border-gray-border border"
          src="/image/event-page-port-1.jpg"
          alt="evento portada 1"
        />
      </div>
      <div class="row-start-1 row-end-3 col-start-2 col-end-3">
        <img
          class="object-cover w-full h-full rounded-lg hover:scale-105 transition duration-300 ease-in-out border-gray-border border"
          src="/image/event-page-port-2.jpg"
          alt="evento portada 2"
        />
      </div>
      <div class="row-start-4 row-end-6 col-start-1 col-end-2">
        <img
          class="object-cover w-full h-full rounded-lg hover:scale-105 transition duration-300 ease-in-out border-gray-border border"
          src="/image/event-page-port-3.jpg"
          alt="evento portada 3"
        />
      </div>
      <div class="row-start-3 row-end-6 col-start-2 col-end-3">
        <img
          class="object-cover w-full h-full rounded-lg hover:scale-105 transition duration-300 ease-in-out border-gray-border border"
          src="/image/event-page-port-4.jpg"
          alt="evento portada 4"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  eventMainTitle: string | undefined;
  eventMainDescription: string | undefined;
}>();
</script>

<style scoped></style>

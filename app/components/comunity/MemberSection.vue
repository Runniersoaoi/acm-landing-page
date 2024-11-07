<template>
  <div v-if="status == 'pending'">Cargando...</div>
  <section
    v-else
    class="col-start-2 col-end-6 row-start-3 min-w-[1280px] grid-cols-[auto_1fr_1fr_1fr] grid gap-10 py-10 mb-6"
  >
    <div
      class="flex flex-col gap-2 bg-gray-principal border-gray-border border p-4 rounded-md max-h-80"
    >
      <p>FILTRAR POR</p>
      <p>Especialidad</p>
      <div class="flex flex-col">
        <label>
          <input
            type="checkbox"
            :checked="specialty === 'Ciberseguridad'"
            @change="handleCheckboxChange('Ciberseguridad')"
          />
          Ciberseguridad
        </label>
        <label>
          <input
            type="checkbox"
            :checked="specialty === 'Desarrollo Web'"
            @change="handleCheckboxChange('Desarrollo Web')"
          />
          Desarrollo Web
        </label>
        <label>
          <input
            type="checkbox"
            :checked="specialty === 'Desarrollo Móvil'"
            @change="handleCheckboxChange('Desarrollo Móvil')"
          />
          Desarrollo Móvil
        </label>
        <label>
          <input
            type="checkbox"
            :checked="specialty === 'Redes'"
            @change="handleCheckboxChange('Redes')"
          />
          Redes
        </label>
        <label>
          <input
            type="checkbox"
            :checked="specialty === 'Soporte Académico'"
            @change="handleCheckboxChange('Soporte Académico')"
          />
          Soporte Académico
        </label>
        <label>
          <input
            type="checkbox"
            :checked="specialty === 'all'"
            @change="handleCheckboxChange('all')"
          />
          Todas
        </label>
      </div>
    </div>
    <div class="grid grid-cols-4 col-span-3 gap-5" v-if="specialty == 'all'">
      <comunity-member-item-other
        v-for="memberItem in memberData"
        :key="memberItem.id"
        :member_name="memberItem.member_name"
        :member-git-hub-link="memberItem.memberGitHubLink"
        :member-linked-in-link="memberItem.memberLinkedInLink"
        :member-cicle="memberItem.memberCicle"
        :member-image="memberItem.memberImage.url"
        :member-speciality="memberItem.memberSpeciality"
      />
    </div>
    <div class="grid grid-cols-4 col-span-3 gap-5" v-if="specialty != 'all'">
      <comunity-member-item
        v-for="memberItem in memberData"
        :key="memberItem.id"
        :member_name="memberItem.member_name"
        :member-git-hub-link="memberItem.memberGitHubLink"
        :member-linked-in-link="memberItem.memberLinkedInLink"
        :member-cicle="memberItem.memberCicle"
        :member-image="memberItem.memberImage.url"
        :member-speciality="memberItem.memberSpeciality"
        :specialty="specialty"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const specialty = ref("all");

const {
  data: memberData,
  error,
  status,
} = await useAsyncData("members", async () => {
  const store = useMemberStore();
  await store.get({ populate: "*" });
  return store.records;
});

function handleCheckboxChange(value: string) {
  specialty.value = specialty.value === value ? "all" : value;
}
</script>

<style></style>

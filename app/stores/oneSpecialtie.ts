import type { Strapi4RequestParams } from "@nuxtjs/strapi";
export const useOneSpecialtyStore = defineStore("specialtyOne", () => {
  const client = useStrapiClient();
  const config = useRuntimeConfig();

  const endpoint = "specialties";
  const records = ref<Specialtie>();

  const get = async (opts: Strapi4RequestParams = {}) => {
    const res = await client<FindMany<Specialtie>>(endpoint, {
      method: "GET",
      params: opts,
      headers: {
        Authorization: `Bearer ${config.public.strapiToken}`,
      },
    });
    records.value = res.data[0];
    return res;
  };

  return { get, records };
});
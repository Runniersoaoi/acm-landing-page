import type { Strapi4RequestParams } from "@nuxtjs/strapi";

export const useCourseStore = defineStore("course", () => {
  const client = useStrapiClient();
  const config = useRuntimeConfig();

  const endpoint = "courses";
  const records = ref<Course[] | null>(null);

  const get = async (opts: Strapi4RequestParams = {}) => {
    const res = await client<FindMany<Course>>(endpoint, {
      method: "GET",
      params: opts,
      headers: {
        Authorization: `Bearer ${config.public.strapiToken}`,
      },
    });
    records.value = res.data;
    return res;
  };

  return { get, records };
});

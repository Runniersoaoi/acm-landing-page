import type { Strapi4RequestParams } from "@nuxtjs/strapi";

export const useCoursePageStore = defineStore("coursePage", () => {
  const client = useStrapiClient();
  const config = useRuntimeConfig();

  const endpoint = "course-page";
  const records = ref<CoursePage>();

  const get = async (opts: Strapi4RequestParams = {}) => {
    const res = await client<FindOne<CoursePage>>(endpoint, {
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

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCoursePageStore, import.meta.hot));
}

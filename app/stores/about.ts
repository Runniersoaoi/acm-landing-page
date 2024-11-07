import type { Strapi4RequestParams } from "@nuxtjs/strapi";

export const useAboutStore = defineStore("about", () => {
  const client = useStrapiClient();
  const config = useRuntimeConfig();

  const endpoint = "about";
  const records = ref<About | null>(null);

  const get = async (opts: Strapi4RequestParams = {}) => {
    const res = await client<FindOne<About>>(endpoint, {
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
  import.meta.hot.accept(acceptHMRUpdate(useAboutStore, import.meta.hot));
}

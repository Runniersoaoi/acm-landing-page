import type { Strapi4RequestParams } from "@nuxtjs/strapi";

export const useHomeStore = defineStore("home", () => {
  const client = useStrapiClient();
  const config = useRuntimeConfig();

  const endpoint = "home";
  const records = ref<Home | null>(null);

  const get = async (opts: Strapi4RequestParams = {}) => {
    const res = await client<FindOne<Home>>(endpoint, {
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
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot));
}

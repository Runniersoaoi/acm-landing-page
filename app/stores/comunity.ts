// useComunityPageStore.ts
import type { Strapi4RequestParams } from "@nuxtjs/strapi";

export const useComunityPageStore = defineStore("comunityPage", () => {
  const client = useStrapiClient();
  const config = useRuntimeConfig();

  const endpoint = "comunity";
  const records = ref<Comunity | null>(null);

  const get = async (opts: Strapi4RequestParams = {}) => {
    const res = await client<FindOne<Comunity>>(endpoint, {
      method: "GET",
      params: opts,
      headers: {
        Authorization: `Bearer ${config.public.strapiToken}`,
      },
    });
    records.value = res.data;
  };

  return { get, records };
});

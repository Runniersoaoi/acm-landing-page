import type { Strapi4RequestParams } from "@nuxtjs/strapi";

export const useEventStore = defineStore("event", () => {
  const client = useStrapiClient();
  const config = useRuntimeConfig();

  const endpoint = "eventts";
  const records = ref<Eventt[]>();

  const get = async (opts: Strapi4RequestParams = {}) => {
    const res = await client<FindMany<Eventt>>(endpoint, {
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

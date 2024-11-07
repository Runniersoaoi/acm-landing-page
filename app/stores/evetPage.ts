import type { Strapi4RequestParams } from "@nuxtjs/strapi";

export const useEventPageStore = defineStore("eventPage", () => {
  const client = useStrapiClient();
  const config = useRuntimeConfig();

  const endpoint = "event";
  const records = ref<EventPage>();

  const get = async (opts: Strapi4RequestParams = {}) => {
    const res = await client<FindOne<EventPage>>(endpoint, {
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
  import.meta.hot.accept(acceptHMRUpdate(useEventPageStore, import.meta.hot));
}

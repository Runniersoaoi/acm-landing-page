import type { Strapi4RequestParams } from "@nuxtjs/strapi";

export const usePageLinkStore = defineStore("pageLink", () => {
  const client = useStrapiClient();
  const config = useRuntimeConfig();

  const endpoint = "page-links";
  const records = ref<PageLink[]>();

  const get = async (opts: Strapi4RequestParams = {}) => {
    const res = await client<FindMany<PageLink>>(endpoint, {
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
  import.meta.hot.accept(acceptHMRUpdate(usePageLinkStore, import.meta.hot));
}

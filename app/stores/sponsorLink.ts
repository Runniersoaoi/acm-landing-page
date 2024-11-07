import type { Strapi4RequestParams } from "@nuxtjs/strapi";

export const useSponsorLinkStore = defineStore("sponsor", () => {
  const client = useStrapiClient();
  const config = useRuntimeConfig();

  const endpoint = "sponsor-brands";
  const records = ref<SponsorBrand[]>();

  const get = async (opts: Strapi4RequestParams = {}) => {
    const res = await client<FindMany<SponsorBrand>>(endpoint, {
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

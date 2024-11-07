import type { Strapi4RequestParams } from "@nuxtjs/strapi";

export const useMemberStore = defineStore("member", () => {
  const client = useStrapiClient();
  const config = useRuntimeConfig();

  const endpoint = "members";
  const records = ref<Member[] | null>(null);

  const get = async (opts: Strapi4RequestParams = {}) => {
    const res = await client<FindMany<Member>>(endpoint, {
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

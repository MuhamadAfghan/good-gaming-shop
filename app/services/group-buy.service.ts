import type { GroupBuyResponse } from "~/types/group-buy";

class GroupBuyService {
  async getGroupBuyDeals(): Promise<GroupBuyResponse> {
    const config = useRuntimeConfig();
    return await $fetch<GroupBuyResponse>(
      "/api/v1/public/homepage/group-buy-deals",
      {
        baseURL: config.public.apiBaseUrl,
      }
    );
  }
}

export const groupBuyService = new GroupBuyService();

import type { PromotionResponse } from "~/types/promotion";

class PromotionService {
  async getPromotions(): Promise<PromotionResponse> {
    const config = useRuntimeConfig();
    return await $fetch<PromotionResponse>(
      "/api/v1/public/homepage/promotions",
      {
        baseURL: config.public.apiBaseUrl,
      }
    );
  }
}

export const promotionService = new PromotionService();

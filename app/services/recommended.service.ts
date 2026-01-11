import type { RecommendedProductResponse } from "~/types/recommended-product";

class RecommendedService {
  async getRecommendedProducts(): Promise<RecommendedProductResponse> {
    const config = useRuntimeConfig();
    return await $fetch<RecommendedProductResponse>(
      "/api/v1/public/homepage/recommended",
      {
        baseURL: config.public.apiBaseUrl,
      }
    );
  }
}

export const recommendedService = new RecommendedService();

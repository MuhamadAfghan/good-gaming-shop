import type { TopSellerResponse } from "~/types/top-seller";

class TopSellerService {
  async getTopSellers(): Promise<TopSellerResponse> {
    const config = useRuntimeConfig();
    return await $fetch<TopSellerResponse>(
      "/api/v1/public/homepage/top-sellers",
      {
        baseURL: config.public.apiBaseUrl,
      }
    );
  }
}

export const topSellerService = new TopSellerService();

import type { BannerResponse } from "~/types/banner";

class BannerService {
  async getBanners(): Promise<BannerResponse> {
    const config = useRuntimeConfig();
    return await $fetch<BannerResponse>("/api/v1/public/homepage/banners", {
      baseURL: config.public.apiBaseUrl,
    });
  }
}

export const bannerService = new BannerService();

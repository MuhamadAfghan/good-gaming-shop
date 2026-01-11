import type { GearUpBrandResponse } from "~/types/gear-up-brand";

class GearUpBrandService {
  async getGearUpBrands(): Promise<GearUpBrandResponse> {
    const config = useRuntimeConfig();
    return await $fetch<GearUpBrandResponse>(
      "/api/v1/public/homepage/gear-up-brands",
      {
        baseURL: config.public.apiBaseUrl,
      }
    );
  }
}

export const gearUpBrandService = new GearUpBrandService();

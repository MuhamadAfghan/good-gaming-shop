import type { NewDropResponse } from "~/types/new-drop";

class NewDropService {
  async getNewDrops(): Promise<NewDropResponse> {
    const config = useRuntimeConfig();
    return await $fetch<NewDropResponse>("/api/v1/public/homepage/new-drops", {
      baseURL: config.public.apiBaseUrl,
    });
  }
}

export const newDropService = new NewDropService();

import type { TikTokEmbedResponse } from "~/types/tiktok-embed";

class TikTokService {
  async getTikTokEmbeds(): Promise<TikTokEmbedResponse> {
    const config = useRuntimeConfig();
    return await $fetch<TikTokEmbedResponse>(
      "/api/v1/public/homepage/tiktok-embeds",
      {
        baseURL: config.public.apiBaseUrl,
      }
    );
  }
}

export const tikTokService = new TikTokService();

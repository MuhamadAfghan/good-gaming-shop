import type { NewsletterResponse } from "~/types/newsletter";

class NewsletterService {
  async getNewsletters(): Promise<NewsletterResponse> {
    const config = useRuntimeConfig();
    return await $fetch<NewsletterResponse>(
      "/api/v1/public/homepage/newsletters",
      {
        baseURL: config.public.apiBaseUrl,
      }
    );
  }
}

export const newsletterService = new NewsletterService();

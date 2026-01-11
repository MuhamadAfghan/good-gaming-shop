import { newsletterService } from "~/services/newsletter.service";
import type { Newsletter } from "~/types/newsletter";

export const useNewsletters = () => {
  const { data, pending, error } = useAsyncData("newsletters", () =>
    newsletterService.getNewsletters()
  );

  const newsletters = computed<Newsletter[]>(() => {
    return data.value?.data || [];
  });

  return {
    newsletters,
    pending,
    error,
  };
};

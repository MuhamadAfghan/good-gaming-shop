import { topSellerService } from "~/services/top-seller.service";
import type { TopSeller } from "~/types/top-seller";

export const useTopSellers = () => {
  const { data, pending, error } = useAsyncData("top-sellers", () =>
    topSellerService.getTopSellers()
  );

  const topSellers = computed<TopSeller[]>(() => {
    return data.value?.data || [];
  });

  return {
    topSellers,
    pending,
    error,
  };
};

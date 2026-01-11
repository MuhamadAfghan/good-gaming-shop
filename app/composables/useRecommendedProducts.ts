import { recommendedService } from "~/services/recommended.service";
import type { RecommendedProduct } from "~/types/recommended-product";

export const useRecommendedProducts = () => {
  const { data, pending, error } = useAsyncData("recommended-products", () =>
    recommendedService.getRecommendedProducts()
  );

  const recommendedProducts = computed<RecommendedProduct[]>(() => {
    return data.value?.data || [];
  });

  return {
    recommendedProducts,
    pending,
    error,
  };
};

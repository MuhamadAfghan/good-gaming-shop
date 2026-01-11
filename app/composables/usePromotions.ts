import { promotionService } from "~/services/promotion.service";
import type { Promotion } from "~/types/promotion";

export const usePromotions = () => {
    const { data, pending, error } = useAsyncData("promotions", () =>
        promotionService.getPromotions()
    );

    const promotions = computed<Promotion[]>(() => {
        return data.value?.data || [];
    });

    return {
        promotions,
        pending,
        error,
    };
};

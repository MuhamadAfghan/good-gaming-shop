import { bannerService } from "~/services/banner.service";
import type { Banner } from "~/types/banner";

export const useBanners = () => {
    const { data, pending, error } = useAsyncData("banners", () =>
        bannerService.getBanners()
    );

    const banners = computed<Banner[]>(() => {

        return data.value?.data || [];
    });

    return {
        banners,
        pending,
        error,
    };
};

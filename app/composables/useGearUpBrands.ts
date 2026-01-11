import { gearUpBrandService } from "~/services/gear-up-brand.service";
import type { GearUpBrand } from "~/types/gear-up-brand";

export const useGearUpBrands = () => {
  const { data, pending, error } = useAsyncData("gear-up-brands", () =>
    gearUpBrandService.getGearUpBrands()
  );

  const gearUpBrands = computed<GearUpBrand[]>(() => {
    return data.value?.data || [];
  });

  return {
    gearUpBrands,
    pending,
    error,
  };
};

import { groupBuyService } from "~/services/group-buy.service";
import type { GroupBuy, InterestCheck } from "~/types/group-buy";

export const useGroupBuy = () => {
  const { data, pending, error } = useAsyncData("group-buy-deals", () =>
    groupBuyService.getGroupBuyDeals()
  );

  const groupBuys = computed<GroupBuy[]>(() => {
    return data.value?.data?.groupBuys || [];
  });

  const interestChecks = computed<InterestCheck[]>(() => {
    return data.value?.data?.interestChecks || [];
  });

  return {
    groupBuys,
    interestChecks,
    pending,
    error,
  };
};

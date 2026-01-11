import { newDropService } from "~/services/new-drop.service";
import type { NewDrop } from "~/types/new-drop";

export const useNewDrops = () => {
  const { data, pending, error } = useAsyncData("new-drops", () =>
    newDropService.getNewDrops()
  );

  const newDrops = computed<NewDrop[]>(() => {
    return data.value?.data || [];
  });

  return {
    newDrops,
    pending,
    error,
  };
};

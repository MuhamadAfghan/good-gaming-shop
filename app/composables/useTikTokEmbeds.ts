import { tikTokService } from "~/services/tiktok.service";
import type { TikTokEmbed } from "~/types/tiktok-embed";

export const useTikTokEmbeds = () => {
  const { data, pending, error } = useAsyncData('tiktok-embeds', () =>
    tikTokService.getTikTokEmbeds()
  )

  const tikTokEmbeds = computed<TikTokEmbed[]>(() => {
    return data.value?.data || []
  })

  return {
    tikTokEmbeds,
    pending,
    error
  }
}

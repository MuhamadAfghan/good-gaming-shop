export interface TikTokEmbed {
  id: string;
  link: string;
  order: number;
}

export interface TikTokEmbedResponse {
  status: boolean;
  path: string;
  statusCode: number;
  message: string;
  data: TikTokEmbed[];
}

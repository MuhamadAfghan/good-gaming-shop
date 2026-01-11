export interface Banner {
  id: string;
  image: string;
  order: number;
  createdAt: string | Record<string, unknown>;
  updatedAt: string | Record<string, unknown>;
}

export interface BannerResponse {
  status: boolean;
  path: string;
  statusCode: number;
  message: string;
  data: Banner[];
}

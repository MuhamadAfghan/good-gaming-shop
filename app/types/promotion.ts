export interface Promotion {
  id: string;
  name: string;
  image: string;
  startDate: string | Record<string, unknown>;
  endDate: string | Record<string, unknown>;
  createdAt: string | Record<string, unknown>;
  updatedAt: string | Record<string, unknown>;
}

export interface PromotionResponse {
  status: boolean;
  path: string;
  statusCode: number;
  message: string;
  data: Promotion[];
}

import type { ProductVariation } from "~/types/top-seller";

export interface RecommendedProduct {
  id: string;
  name: string;
  desc: string;
  thumbnail: {
    id: string;
    name: string;
    path: string;
    type: string;
  };
  productVariations: ProductVariation[];
}

export interface RecommendedProductResponse {
  status: boolean;
  path: string;
  statusCode: number;
  message: string;
  data: RecommendedProduct[];
}

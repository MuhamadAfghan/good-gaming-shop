export interface ProductColor {
  id: string;
  name: string;
  hexCode: string;
  realPrice: number;
  markupPrice: number;
  order: number;
}

export interface ProductVariation {
  id: string;
  name: string;
  productColors: ProductColor[];
}

export interface TopSeller {
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

export interface TopSellerResponse {
  status: boolean;
  path: string;
  statusCode: number;
  message: string;
  data: TopSeller[];
}

export interface ProductGallery {
  id: string;
  name: string;
  path: string;
  type: string;
}

export interface ProductBrand {
  id: string;
  name: string;
}

export interface ProductCategory {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  desc: string;
  brand: ProductBrand;
  category: ProductCategory;
  productGallery: ProductGallery[];
}

export interface GroupBuy {
  id: string;
  startDate: string | Record<string, unknown>;
  endDate: string | Record<string, unknown>;
  product: Product;
  totalSold: number;
}

export interface InterestCheck {
  id: string;
  name: string;
  desc: string;
  price: number;
  startDate: string | Record<string, unknown>;
  endDate: string | Record<string, unknown>;
  brand: ProductBrand;
  category: ProductCategory;
  subcategory?: ProductCategory;
  galleries: (ProductGallery & { order: number })[];
  totalParticipants: number;
}

export interface GroupBuyResponseData {
  groupBuys: GroupBuy[];
  interestChecks: InterestCheck[];
}

export interface GroupBuyResponse {
  status: boolean;
  path: string;
  statusCode: number;
  message: string;
  data: GroupBuyResponseData;
}

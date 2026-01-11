export interface BrandGallery {
  id: string;
  name: string;
  path: string;
}

export interface GearUpBrand {
  id: string;
  name: string;
  galleries: BrandGallery[];
}

export interface GearUpBrandResponse {
  status: boolean;
  path: string;
  statusCode: number;
  message: string;
  data: GearUpBrand[];
}

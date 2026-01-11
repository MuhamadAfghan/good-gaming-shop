export interface Newsletter {
  id: string;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  publishedAt: any; // API returns empty object in sample, keep flexible
  views: number;
}

export interface NewsletterResponse {
  status: boolean;
  path: string;
  statusCode: number;
  message: string;
  data: Newsletter[];
}

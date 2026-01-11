export interface Thumbnail {
  id: string;
  name: string;
  path: string;
  type: string;
}

export interface NewDrop {
  id: string;
  name: string;
  desc: string;
  thumbnail: Thumbnail;
}

export interface NewDropResponse {
  status: boolean;
  path: string;
  statusCode: number;
  message: string;
  data: NewDrop[];
}

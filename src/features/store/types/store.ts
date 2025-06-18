export interface Category {
  status: boolean;
  category: string;
}

interface Dimension {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  shippingInformation: string;
  category: string;
  description: string;
  rating: number;
}

export interface ProductStock extends Product {
  stock: number;
}

export interface ProductDetail extends ProductStock {
  images: string[];
  dimensions: Dimension;
  warrantyInformation: string;
  returnPolicy: string;
  reviews: Review[];
  tags: string[];
}

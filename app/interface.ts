export interface simplifiedProduct {
  id: number;
  imageUrl: string[];
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  id: number;
  image: string[];
  price: number;
  slug: string;
  category: {
    id: number;
    name: string;
  };
  name: string;
  description: string;
}

interface Size {
  _id: string;
  size: string;
  quantity: number;
}

interface Color {
  _id: string;
  name: string;
  picture: {
    secure_url: string;  
  };
  sizes: Size[];
}

interface Product {
  _id: number;
  name: string;
  price: number;
  details: string;
  picture: string;
  colors: Color[];
}

export type { Product, Size, Color };

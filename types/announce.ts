interface Announce {
  _id: string;
  product: {
    _id: string;
    name: string;
    price: number;
    picture: {
      secure_url: string;
    };
  };
  percentage: number;
  show: boolean;
}

export type { Announce };

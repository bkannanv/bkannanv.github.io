export type User = {
  name: string;
  id: string;
  email: string;
};

export type UserSchema = {
  [key: number]: User;
};

export enum ProductType {
  House = "House",
  Sports = "Sports",
  Grooming = "Grooming",
}

export type Product = {
  name: string;
  type: ProductType;
  cost: number;
  id: number;
};

export type ProductSchema = {
  [key: number]: Product;
};

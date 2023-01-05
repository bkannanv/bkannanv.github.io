import { ProductSchema, ProductType, UserSchema } from "./types";

export const USER_DATA: UserSchema = {
  1: {
    name: "Bharathi",
    id: "1",
    email: "bkannanv@twilio.com",
  },
  2: {
    name: "Praveen",
    id: "2",
    email: "praveen@twilio.com",
  },
};

export const PRODUCT_DATA: ProductSchema = {
  1: {
    name: "chair",
    type: ProductType.House,
    cost: 300,
    id: 1,
  },
  2: {
    name: "bat",
    type: ProductType.Sports,
    cost: 500,
    id: 2,
  },
};

import { createContext, useContext, useReducer, useState } from "react";
import { faker, Faker } from "@faker-js/faker";

export const CartContext = createContext({
  product: [...Array(20)].map((product) => ({
    id: faker.string.uuid(),
    productName: faker.commerce.productName(),
    productDescription: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 100, max: 5000 }),
    image: faker.image.urlPicsumPhotos({
      width: 300,
      height: 300,
      category: "shoes" 
    }),
    instock: faker.helpers.arrayElement([0, 5, 10, 15, 20]),
    fastDelivery: faker.datatype.boolean(),
    new: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  })
),
});



export const CartContextProvider = CartContext.Provider;

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;

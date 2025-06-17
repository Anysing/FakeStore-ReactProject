import { createContext, useContext, useEffect, useReducer } from "react";
import { faker } from "@faker-js/faker";
import UseReducer from '../cartcontext/UseReducer'

faker.seed(200);

const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const products = [...Array(20)].map((_) => ({
    id: faker.string.uuid(),
    productName: faker.commerce.productName(),
    productDescription: faker.commerce.productDescription(),
    price: faker.number.int({ min: 1000, max: 5000 }),
    image: faker.image.urlPicsumPhotos({
      width: 300,
      height: 300,
    }),
    inStock: faker.helpers.arrayElement([0, 5, 10, 15, 20]),
    fastDelivery: faker.datatype.boolean(),
    new: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(UseReducer, {
    unfilteredProducts: products,
    products,
    cart: [],
  });

  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem('CartcontextData'))
    if (!localdata) {
      return
    }
    dispatch({type : 'SET_STATE',payload : localdata ?? {}})
  }, [])

  useEffect(() => {
    localStorage.setItem('CartcontextData',JSON.stringify(state))
  }, [state])

  
  


  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext, CartContextProvider };
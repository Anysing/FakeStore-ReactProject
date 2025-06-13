import { useState, useContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { CartContextProvider } from "./context/cartcontext/Cartcontext";
import useCartContext from "./context/cartcontext/Cartcontext";
import Home from "./Pages/Cart/Home/Home";

function App() {
  const product = useCartContext();
  

  return (
    <CartContextProvider value={{ product }}>
        <Header />
      <div className="flex">
        <Home />
      </div>
    </CartContextProvider>
  );
}

export default App;

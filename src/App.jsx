import "./App.css";
import Header from "./components/Header/Header";
import { useCartContext,CartContextProvider } from "./context/cartcontext/CartContext";
import Home from "./Pages/Cart/Home/Home";
import { BrowserRouter,Routes,Router, Route } from "react-router-dom";
import Viewcart from '../src/Viewcart/Viewcart'

function App() {
  const product = useCartContext();
  
  return (
    <CartContextProvider value={{ product }}>
      <BrowserRouter>
        <Header />
        <Routes>
         <Route path="/" element = {<Home />} ></Route>
         <Route path="/cart" element = {<Viewcart />} ></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

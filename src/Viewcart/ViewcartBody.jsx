import { useCartContext } from "../context/cartcontext/CartContext";
import ViewcartCart from "./ViewcartCart";

const ViewcartBody = () => {
  const {
    state: { cart },
  } = useCartContext();

  return (
    <>
      {cart.length <= 0 ? (
        <div className="w-full flex items-center justify-center mt-6 text-xl font-semibold">Cart Is Empty Now..!!</div>
      ) : (
        <div className="w-full grid grid-cols-3 gap-[1rem] p-3 max-[1150px]:grid-cols-2 max-[850px]:grid-cols-1">
          {cart.map((prod) => {
            return <ViewcartCart key={prod.id} productDetail={prod} />;
          })}
        </div>
      )}
    </>
  );
};

export default ViewcartBody;

import { AiOutlineThunderbolt } from "react-icons/ai";
import { useCartContext } from "../context/cartcontext/CartContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const ViewcartCart = ({ productDetail }) => {
  const {
    state: { cart },
    dispatch,
  } = useCartContext();

  console.log(cart);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: productDetail });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productDetail });
  };

  const handleincreasequantity = () => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: productDetail });
  };

  const handledecreasequantity = () => {
    if (productDetail.quantity <= 1) return
    dispatch({ type: "DECREMENT_QUANTITY", payload: productDetail });
  };

  return (
    <div className="card bg-base-100 shadow-sm border border-white/20">
      <figure>
        <img
          src={productDetail.image}
          alt="Shoes"
          className="aspect-video object-cover h-full w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="line-clamp-1">{productDetail.productName}</span>
        </h2>
        <div className="flex items-center gap-4">
          <p>
            <strong>{productDetail.price}</strong> Rs
          </p>
          <button
            onClick={handleincreasequantity}
            className="btn btn-square btn-outline btn-sm"
          >
            <FaPlus />
          </button>
          <span className="text-xl font-semibold">
            {productDetail.quantity}
          </span>
          <button
            onClick={handledecreasequantity}
            className="btn btn-square btn-outline btn-sm"
          >
            <FaMinus />
          </button>
        </div>
        {productDetail.instock ? (
          <p className="text-green-500">
            {productDetail.instock} items left..!!
          </p>
        ) : (
          <p className="text-red-500">Out of Stock..!!</p>
        )}
        {productDetail.fastDelivery ? (
          <p className="text-blue-400 flex items-center gap-3">
            Fast Delivery <AiOutlineThunderbolt className="mt-1" />
          </p>
        ) : (
          <p className="text-blue-400">5 Days Delivery</p>
        )}

        <div className="card-actions justify-between mt-4">
          {cart.some((p) => p.id === productDetail.id) ? (
            <button
              onClick={handleRemoveFromCart}
              className="btn btn-outline btn-error"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="btn btn-outline btn-info"
            >
              Add To Cart
            </button>
          )}

          <button
            onClick={()=>alert('Payment Gateway Is Not Available For Now')}
            className="btn btn-outline btn-info"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewcartCart;

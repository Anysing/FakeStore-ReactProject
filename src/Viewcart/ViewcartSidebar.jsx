import { useCartContext } from "../context/cartcontext/CartContext";

const ViewcartSidebar = () => {
    const {
    state: { cart }
  } = useCartContext();

  const cartlength = cart.length
  const subtotal = cart.reduce((acc,curr) => acc + curr.price * curr.quantity,0) 
  return (
    <div className="min-w-[15rem] border-l border-l-white/20 p-6 sticky top-[4rem] h-fit">
      <div className="flex flex-col gap-3">
        <span className="text-lg font-bold">{cartlength} Items</span>
        <span className="text-info">Subtotal: {subtotal} Rs</span>
        <div className="card-actions">
          <button
            onClick={() =>alert('Payment Gateway Is Not Available For Now')}
            className="btn btn-primary btn-block"
          >
            Proceed To Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewcartSidebar;

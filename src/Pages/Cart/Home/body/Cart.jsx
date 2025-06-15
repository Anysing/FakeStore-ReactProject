import React from "react";
import Rating from "../../../../components/Header/Rating/Rating";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Cart = ({ productDetail }) => {
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
          {productDetail.new && (
            <div className="badge badge-secondary">NEW</div>
          )}
        </h2>
        <div >
        <p className="line-clamp-2">{productDetail.productDescription}</p>
        </div>
        <p>
          <strong>{productDetail.price}</strong> Rs
        </p>
        {productDetail.instock ? (
          <p className="text-green-500">{productDetail.instock} items left..!!</p>
        ) : (
          <p className="text-red-500">Out of Stock..!!</p>
        )}
        {productDetail.fastDelivery ? (
          <p className="text-blue-400 flex items-center gap-3">
            Fast Delivery <AiOutlineThunderbolt className="mt-1"/>
            </p>
        ) : (
          <p className="text-blue-400">5 Days Delivery</p>
        )}
        <Rating defaultRating={productDetail.rating} isEditable={false} className='w-4 h-4'/>
        <div className="card-actions justify-between mt-4">
          <button className="btn btn-outline btn-info">Add To Cart</button>
          <button className="btn btn-outline btn-info">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

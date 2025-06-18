import React, { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import Filterbar from "../../Pages/Cart/Home/FilterBar/Filterbar";
import { useCartContext } from "../../context/cartcontext/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [Searchvalue, setSearchvalue] = useState("");

  const navigate = useNavigate();

  const {
    state: { cart, unfilteredProducts}, dispatch
  } = useCartContext();

  const cartlength = cart.length;
  const subtotal = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const handlesearchvalue = (e) => {
    setSearchvalue(e.target.value);
  };

  useEffect(() => {
    if (!Searchvalue) {
      dispatch({type : "SET_SEARCHVALUE", payload : unfilteredProducts})
      return
    }
    const filteredata = unfilteredProducts.filter((product) => {
      return product.productName.toLowerCase().includes(Searchvalue.toLowerCase())
    })
    dispatch({type : "SET_SEARCHVALUE", payload : filteredata})
  }, [Searchvalue])
  

  return (
    <div className="navbar bg-base-100 border-b border-b-white/20 sticky top-0 z-[100]">
      {/* Left side - Drawer and Logo in same row */}
      <div className="flex-1">
        <div className="flex items-center gap-1">
          {/* Drawer - only the button, not the whole drawer */}
          <div className="min-[570px]:hidden">
            <label
              htmlFor="my-drawer"
              className="btn btn-outline btn-info drawer-button p-3"
            >
              <CgMenuGridR className="w-6 h-6" />
            </label>
          </div>

          {/* Fake store Logo */}
          <div className="logodiv">
            <Link to={"/"} className="btn btn-ghost text-xl">
              Fake Store
            </Link>
          </div>
        </div>

        {/* Drawer structure - positioned outside the flex container */}
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <Filterbar />
            </ul>
          </div>
        </div>
      </div>

      {/* Right side - Search Bar and Cart */}
      <div className="flex gap-3">
        <div className="form-control">
          <input
            value={Searchvalue}
            onChange={handlesearchvalue}
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cartlength}
              </span>
            </div>
          </div>
          {/* cart dropdown */}
          <div
            tabIndex="0"
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{cartlength} Items</span>
              <span className="text-info">Subtotal: {subtotal} Rs</span>
              <div className="card-actions">
                <button
                  onClick={() => navigate("/cart")}
                  className="btn btn-primary btn-block"
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

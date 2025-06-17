import React, { useEffect } from "react";
import Rating from "../../../../components/Header/Rating/Rating";
import { useState } from "react";
import { useCartContext } from "../../../../context/cartcontext/CartContext";

const Filterbar = () => {

  const initialFilter = {
    price: 5000,
    Ratings: 1,
    SortingType : false,
    IncludeOutOfStock : true,
    IncludeFastDelivery : false
  }

  const {
    state: { unfilteredProducts }, dispatch,
  } = useCartContext()
  

  const [Filter, setFilter] = useState(initialFilter);

  const handleinputchange = (e) => {
    const {name , value,checked,type} = e.target;

    setFilter((prev) => ({
      ...prev,
      [name]: type === 'checkbox'? checked : value,
    }));
  };

  const handleClearFilter = () => {
    setFilter(initialFilter)
  }

  useEffect(() => {
    let filteredItems = unfilteredProducts.filter((p) => {
      let priceCondition = p.price <= Filter.price;
      let ratingCondition = p.ratings >= Filter.Ratings;
      let includeOutOfStockCondition = Filter.IncludeOutOfStock
        ? true
        : p.inStock;
      let deliveryCondition = Filter.IncludeFastDelivery ? p.fastDelivery : true;
      return (
        includeOutOfStockCondition &&
        priceCondition &&
        ratingCondition &&
        deliveryCondition
      );
    });

    filteredItems = Filter.SortingType
      ? filteredItems.sort((Pa, Pb) => {
          return Filter.SortingType === "ascending"
            ? Pa.productName.localeCompare(Pb.productName)
            : Pb.productName.localeCompare(Pa.productName);
        })
      : filteredItems;

    dispatch({
      type : "SET_SEARCHVALUE",
      payload : filteredItems
    })
  }, [Filter,unfilteredProducts])

  return (
    // radio button
    <div className="min-w-[15rem] border-r border-r-white/20 p-6 sticky top-[4rem] h-fit">
      <div>
        <div className="form-control mb-5">
          <label className="label cursor-pointer flex items-center justify-between gap-4">
            <span className="label-text">Ascending</span>
            <input
              type="radio"
              name="SortingType"
              className="radio radio-primary"
              value= "ascending"
              onChange={handleinputchange}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex items-center justify-between gap-4">
            <span className="label-text">Descending</span>
            <input
              type="radio"
              name="SortingType"
              className="radio radio-primary"
              value= "descending"
              onChange={handleinputchange}
            />
          </label>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white/20 my-8"></div>
      {/* checkbox button */}
      <div>
        <div className="form-control mb-5">
          <label className="label cursor-pointer flex items-center justify-between gap-4">
            <span className="label-text">Include Out Of Stock</span>
            <input
              type="checkbox"
              checked = {Filter.IncludeOutOfStock}
              name="IncludeOutOfStock"
              className="checkbox checkbox-primary"
              onChange={handleinputchange}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex items-center justify-between gap-4">
            <span className="label-text">Fast Delivery Only</span>
            <input
              type="checkbox"
              checked = {Filter.IncludeFastDelivery}
              name="IncludeFastDelivery"
              className="checkbox checkbox-primary"
              onChange={handleinputchange}
            />
          </label>
        </div>
      </div>
      {/* Rating */}
      <div className="starting my-8">
        <Rating
          defaultRating={Filter.Ratings}
          isEditable={true}
          onRatingChange={(Rating) =>
            setFilter((prev) => ({
              ...prev,
              Ratings: Rating,
            }))
          }
        />
      </div>
      <div className="flex flex-col gap-3 my-8">
        <p>
          Price : <strong>{Filter.price}</strong> Rs
        </p>
        <input
          name="price"
          type="range"
          min={0}
          max={5000}
          value={Filter.price}
          className="range range-info"
          onChange={handleinputchange}
        />
      </div>
      {/* clear filter button */}
      <div className="flex justify-center">
        <button onClick={handleClearFilter} className="btn btn-soft w-full">Clear Filter</button>
      </div>
    </div>
  );
};

export default Filterbar;

import React from "react";
import Rating from "../../../../components/Header/Rating/Rating";
import { useState } from "react";

const Filterbar = () => {
  const [Filter, setFilter] = useState({
    price: 5000,
    Ratings: 1,
  });

  const handleinputchange = (e) => {
    const { name, value } = e.target;

    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    // radio button
    <div className="min-w-[15rem] border-r border-r-white/20 p-6 sticky top-[4rem] h-fit">
      <div>
        <div className="form-control mb-5">
          <label className="label cursor-pointer flex items-center justify-between gap-4">
            <span className="label-text">Ascending</span>
            <input
              type="radio"
              name="radio-4"
              className="radio radio-primary"
              defaultChecked
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex items-center justify-between gap-4">
            <span className="label-text">Descending</span>
            <input
              type="radio"
              name="radio-4"
              className="radio radio-primary"
              defaultChecked
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
              defaultChecked
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex items-center justify-between gap-4">
            <span className="label-text">Fast Delivery Only</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-primary"
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
          type="range"
          name="price"
          min={0}
          max={5000}
          value={Filter.price}
          className="range range-info"
          onChange={handleinputchange}
        />
      </div>
      {/* clear filter button */}
      <div className="flex justify-center">
        <button className="btn btn-soft w-full">Clear Filter</button>
      </div>
    </div>
  );
};

export default Filterbar;

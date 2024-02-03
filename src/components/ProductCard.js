import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductCard = ({ productData }) => {
  const { name, imageURL, price } = productData;
  const dispatch = useDispatch();

  const inCart = useSelector((store) =>
    store.cart.items.some((item) => item.id === productData.id)
  );

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem({ ...item, totalQuantity: item.quantity }));
  };

  const buttonText = inCart ? "In Cart" : "Cart +";

  return (
    <div
      data-testid="proCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img className="rounded-lg" alt="res-logo" src={imageURL} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <div className="flex justify-between">
        <div className="flex justify-between">
          <h4 className="font-bold">{"Rs." + price}</h4>
        </div>
        <div className="">
          <button
            className="border border-black mx-3 px-4 rounded-md hover:bg-slate-800 bg-slate-600 text-white shadow-lg"
            onClick={() => handleAddItem(productData)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

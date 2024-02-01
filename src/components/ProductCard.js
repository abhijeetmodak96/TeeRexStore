import React from "react";

const ProductCard = ({ productData }) => {
  const { name, imageURL, price } = productData;

  return (
    <div
      data-testid="proCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img className="rounded-lg" alt="res-logo" src={imageURL} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <div className="flex justify-between">
        <h4 className="font-bold">{"Rs." + price}</h4>
        <h4 className="border border-black mx-3 px-6 rounded-lg hover:bg-slate-800 bg-slate-600 text-white">
          Cart
        </h4>
      </div>
    </div>
  );
};

export default ProductCard;

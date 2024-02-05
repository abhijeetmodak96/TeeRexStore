import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredProducts, toggleFilter } from "../utils/productSlice";
import useFilterItems from "../hooks/useFilterItems";

const Checkboxes = () => {
  const dispatch = useDispatch();
  const filters = useSelector((store) => store.product.filters);
  const updatedFilteredProducts = useFilterItems();

  const handleToggleFilter = (filter) => {
    dispatch(toggleFilter(filter));
  };
  useEffect(() => {
    dispatch(addFilteredProducts(updatedFilteredProducts));
  }, [filters]);

  return (
    <div>
      <label className="block text-gray-700 font-bold mb-2">Colour</label>
      <div className="">
        <label className="block items-center mb-0.5">
          <input
            type="checkbox"
            className="form-checkbox "
            onChange={() => handleToggleFilter("Red")}
          />
          <span className="ml-2">Red</span>
        </label>

        <label className="block items-center mb-0.5">
          <input
            type="checkbox"
            className="form-checkbox "
            onChange={() => handleToggleFilter("Blue")}
          />
          <span className="ml-2">Blue</span>
        </label>
        <label className="block items-center mb-0.5">
          <input
            type="checkbox"
            className="form-checkbox"
            onChange={() => handleToggleFilter("Green")}
          />
          <span className="ml-2">Green</span>
        </label>
      </div>

      <label className="block text-gray-700 font-bold mb-2 mt-4">Gender</label>
      <div className="">
        <label className="block items-center mb-0.5">
          <input
            type="checkbox"
            className="form-checkbox "
            onChange={() => handleToggleFilter("Men")}
          />
          <span className="ml-2">Men</span>
        </label>
        <label className="block items-center mb-0.5">
          <input
            type="checkbox"
            className="form-checkbox "
            onChange={() => handleToggleFilter("Women")}
          />
          <span className="ml-2">Women</span>
        </label>
      </div>

      <label className="block text-gray-700 font-bold mb-2 mt-4">Price</label>
      <div className="">
        <label className="block items-center mb-0.5">
          <input
            type="checkbox"
            className="form-checkbox "
            onChange={() => handleToggleFilter("0-Rs.250")}
          />
          <span className="ml-2">Rs.0-Rs.250</span>
        </label>

        <label className="block items-center mb-0.5">
          <input
            type="checkbox"
            className="form-checkbox "
            onChange={() => handleToggleFilter("251-Rs.450")}
          />
          <span className="ml-2">Rs.251-Rs.450</span>
        </label>
        <label className="block items-center mb-0.5">
          <input
            type="checkbox"
            className="form-checkbox"
            onChange={() => handleToggleFilter("451-Rs.600")}
          />
          <span className="ml-2">Rs.451-Rs.600</span>
        </label>
      </div>

      <label className="block text-gray-700 font-bold mb-2 mt-4">Type</label>
      <div className="">
        <label className="block items-center mb-0.5">
          <input
            type="checkbox"
            className="form-checkbox "
            onChange={() => handleToggleFilter("Polo")}
          />
          <span className="ml-2">Polo</span>
        </label>

        <label className="block items-center mb-0.5">
          <input
            type="checkbox"
            className="form-checkbox"
            onChange={() => handleToggleFilter("Hoodie")}
          />
          <span className="ml-2">Hoodie</span>
        </label>
        <label className="block items-center mb-0.5">
          <input
            type="checkbox"
            className="form-checkbox "
            onChange={() => handleToggleFilter("Basic")}
          />
          <span className="ml-2">Basic</span>
        </label>
      </div>
    </div>
  );
};

export default Checkboxes;

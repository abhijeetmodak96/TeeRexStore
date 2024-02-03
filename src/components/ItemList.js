import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleSubtractItem = (item) => {
    // Dispatch an action
    dispatch(removeItem(item.id));
  };

  return (
    <div>
      {cartItems?.length !== 0 &&
        cartItems.map((item) => (
          <div
            key={item.id}
            className=" p-2 m-2 border-gray-200 bg-slate-100 text-left flex "
          >
            <div className="grid grid-cols-12 w-full p-4 flex">
              <div className="col-span-2  border border-2">
                <img src={item.imageURL} alt="imageURL" />
              </div>

              <div className="col-span-6 m-3 p-3">
                <p className="font-bold">{item.name}</p>
                <p className="font-light">{"Rs." + item.price}</p>
              </div>

              <div className=" col-span-4 m-4 p-4 flex">
                <button
                  className=" p-2 hover:bg-slate-900 bg-slate-700 text-white shadow-lg font-bold"
                  onClick={() => handleSubtractItem(item)}
                >
                  -
                </button>
                <button className="p-2 hover:bg-slate-900 bg-slate-700 text-white shadow-lg font-bold">
                  {item.quantity}
                </button>
                <button
                  className=" p-2 hover:bg-slate-900 bg-slate-700 text-white shadow-lg font-bold"
                  onClick={() => handleAddItem(item)}
                >
                  +
                </button>
              </div>
            </div>
            {item.quantity === item.totalQuantity && (
              <p className="text-red-500 font-semibold m-4 p-4">
                Stock limit is achieved for the item
              </p>
            )}
          </div>
        ))}
      {cartItems.length != 0 && (
        <div className="border-gray-400 border-t-2 text-left m-6 p-4 flex justify-around">
          <p className="font-bold text-black">Total Amount</p>
          <p className="font-semibold text-slate-700">Rs.{totalAmount}</p>
        </div>
      )}
    </div>
  );
};

export default ItemList;

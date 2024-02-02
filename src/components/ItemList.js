import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className=" p-2 m-2 border-gray-200 text-left flex ">
          <div className="grid grid-cols-12 w-full p-4 flex">
            <div className="col-span-2  border border-2">
              <img src={item.imageURL} alt="imageURL" />
            </div>

            <div className="col-span-6 m-3 p-3">
              <p className="font-bold">{item.name}</p>
              <p className="font-light">{"Rs." + item.price}</p>
            </div>
            <div className=" col-span-4 m-4 p-4 flex">
              <button className=" p-2 hover:bg-slate-900 bg-slate-700 text-white shadow-lg font-bold">
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

          <div></div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

// <div className="w-9/12">
// <div className="py-2">
//   <span>{item.name}</span>
//   <span>- ₹{item.price}</span>
// </div>
// </div>
// <div className="w-3/12 p-4">
// <div className="absolute">
//   <button
//     className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
//     onClick={() => handleAddItem(item)}
//   >
//     Add +
//   </button>
// </div>
// <img src={item.imageURL} alt="imageURL" className="w-full" />
// </div>

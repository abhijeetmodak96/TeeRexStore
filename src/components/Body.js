import { useEffect } from "react";
import { CATALOGUE_URL } from "../utils/constants";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilteredProducts,
  addListofProducts,
  addSearchText,
} from "../utils/productSlice";

const Body = () => {
  const dispatch = useDispatch();

  const filteredProduct = useSelector(
    (store) => store.product.filteredProducts
  );
  const listOfProducts = useSelector((store) => store.product.listofProducts);
  const searchText = useSelector((store) => store.product.searchText);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(CATALOGUE_URL);
      const json = await data.json();
      dispatch(addListofProducts(json));
      dispatch(addFilteredProducts(json));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const performSearch = () => {
    const filteredProduct = listOfProducts.filter(
      (pro) =>
        pro.name.toLowerCase().includes(searchText.toLowerCase()) ||
        pro.type.toLowerCase().includes(searchText.toLowerCase()) ||
        pro.color.toLowerCase().includes(searchText.toLowerCase())
    );
    dispatch(addFilteredProducts(filteredProduct));
    dispatch(addSearchText(""));
  };

  return (
    <>
      {listOfProducts && listOfProducts.length > 0 ? (
        <div className="grid grid-cols-12 absolute">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9 ">
            <div className="filter flex justify-center items-center p-3">
              <input
                type="text"
                placeholder="🔍  Search for products,brands and more"
                className="border border-solid border-black w-[30rem] rounded-md h-10 px-4 py-2 m-4 bg-slate-50"
                value={searchText}
                onChange={(e) => {
                  dispatch(addSearchText(e.target.value));
                }}
                onKeyPress={handleKeyPress}
              />
              <button
                className="px-4 py-2 hover:bg-green-200 bg-green-100 m-4 rounded-lg "
                onClick={performSearch}
              >
                Search
              </button>
            </div>
            <div className="flex flex-wrap">
              {filteredProduct.map((product) => (
                <ProductCard key={product.id} productData={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default Body;

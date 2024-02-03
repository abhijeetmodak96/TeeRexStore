import { useState, useEffect } from "react";
import { CATALOGUE_URL } from "../utils/constants";
import ProductCard from "./ProductCard";

const Body = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CATALOGUE_URL);
    const json = await data.json();

    setListOfProducts(json);
    setFilteredProduct(json);
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
    setFilteredProduct(filteredProduct);
    setSearchText("");
  };

  return (
    <div className="">
      <div className="filter flex justify-center items-center p-3">
        <input
          type="text"
          placeholder="🔍  Search for products,brands and more"
          className="border border-solid border-black w-[30rem] rounded-md h-10 px-4 py-2 m-4 bg-slate-50"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
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
  );
};

export default Body;

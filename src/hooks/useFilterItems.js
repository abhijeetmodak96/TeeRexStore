import { useSelector } from "react-redux";

const useFilterItems = () => {
  const listOfProducts = useSelector((store) => store.product.listofProducts);
  const filters = useSelector((store) => store.product.filters);

  const getUpdatedFilteredProducts = () => {
    if (!filters || filters.length === 0) {
      // If no filters, return all products
      return listOfProducts;
    }

    return listOfProducts.filter((pro) => {
      return filters.some((filter) => {
        const normalizedFilter = filter.toLowerCase();

        if (
          filter.toLowerCase().includes("rs.") &&
          pro.price !== undefined &&
          pro.price !== null
        ) {
          const [minPrice, maxPrice] = normalizedFilter
            .replace("rs.", "")
            .split("-")
            .map(Number);

          return (
            pro.price >= minPrice &&
            (isNaN(maxPrice) ? true : pro.price <= maxPrice)
          );
        } else if (
          filter.toLowerCase() === "men" ||
          filter.toLowerCase() === "women"
        ) {
          return pro.gender && normalizedFilter === pro.gender.toLowerCase();
        }

        return Object.values(pro).some(
          (value) =>
            value && value.toString().toLowerCase().includes(normalizedFilter)
        );
      });
    });
  };

  return getUpdatedFilteredProducts();
};

export default useFilterItems;

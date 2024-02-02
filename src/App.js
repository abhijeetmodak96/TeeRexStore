import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import Head from "./components/Head";
import appStore from "./utils/appStore";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Error from "./components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Head />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

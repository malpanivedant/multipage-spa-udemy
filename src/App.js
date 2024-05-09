import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetails";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailsPage />  },
    ],
  },
]);

// const routeDefinations = createRoutesFromElements(<Route>
//   <Route path="/" element={<HomePage />} />
//   <Route path="/products" element={<ProductsPage />} />
// </Route>)

// const router = createBrowserRouter(routeDefinations);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

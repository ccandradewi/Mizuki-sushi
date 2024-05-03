import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import TeamsPage from "./pages/TeamsPage";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/teams",
    element: <TeamsPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
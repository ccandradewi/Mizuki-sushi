import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import TeamsPage from "./pages/TeamsPage";
import { useEffect } from "react";
const AppLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppWithScrollToTop() {
  return (
    <RouterProvider router={router}>
      <ScrollToTop />
      <App />
    </RouterProvider>
  );
}

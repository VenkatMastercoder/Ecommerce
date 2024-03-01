/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import AppLayout from "../layout/AppLayout";
import HeroSection from "../component/HeroSection/HeroSection";
import About from "../component/About/About";
import ProductView from "../component/ProductView/ProductView";
import Error from "../component/Error/Error";
import ViewCart from "../component/ViewCart/ViewCart";

// Dynamic Import or Dynamic Bunding
const ContactPage = lazy(() => import("../component/Contact/Contact"));
const ProductPage = lazy(() =>
  import("../component/ProductLayout/ProductLayout")
);

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/product",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "/about-ecommerce",
        element: <About />,
      },
      {
        path: "/ProductView/:productId",
        element: <ProductView />,
      },
      {
        path: "/cart",
        element: <ViewCart />,
      },
    ],
    errorElement: <Error />,
  },
];

export default [...routes];

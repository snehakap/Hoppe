import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Service } from "./pages/Service";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Videos } from "./pages/Videos";
import { Legal } from "./pages/Legal";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "service", Component: Service },
      { path: "about", Component: AboutUs },
      { path: "contact", Component: Contact },
      { path: "videos", Component: Videos },
      { path: "legal", Component: Legal },
    ],
  },
]);

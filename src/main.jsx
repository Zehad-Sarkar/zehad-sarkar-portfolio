import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./component/Home/Home/Home";
import Project from "./component/Project/Project";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </div>
);

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Chocolates from "./components/Chocolates";
import AddChocolate from "./components/AddChocolate";
import UpdateChocolate from "./components/UpdateChocolate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Chocolates />,
        loader: () => fetch('http://localhost:5000/chocolate')
      },
      {
        path: '/addchocolate',
        element: <AddChocolate />
      },
      {
        path: '/updatechocolate/:id',
        element: <UpdateChocolate />,
        loader : ({params}) => fetch(`http://localhost:5000/chocolate/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

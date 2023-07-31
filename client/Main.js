import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Pokemon from "./components/singularPokemon";
import Trainer from "./components/SingularTrainer";
import Home from "./components/Home";

function Main() {
  const Layout = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/", // localhost:1337/
          element: <Home />,
        },
        {
          path: "/Pokemon/:id", // localhost:1337/pokemon/1
          element: <Pokemon />,
        },
        {
          path: "/trainer/:id", // localhost:13337/trainer/2
          element: <Trainer />,
        },
      ],
    },
  ]);

  return (
    <div>
      {/* Wrap your app with RouterProvider */}
      <RouterProvider router={router} />
    </div>
  );
}

export default Main;
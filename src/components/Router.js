import React from "react";
import { useRoutes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import UserDetail from "./UserDetail";
import Users from "./Users";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/about",
        element: <About />
    },
    {
      path: "/users",
      element: <Users />,
      children: [
        {
          path: ":userId",
          element: <UserDetail />,
        },
      ],
    },
    {
        path: "*",
        element: <PageNotFound />
    }
  ]);
};

export default Router;

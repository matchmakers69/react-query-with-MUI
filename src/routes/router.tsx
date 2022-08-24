import Layout from "components/ui/Layout";
import withLoader from "HOC/withLoader";
import constants from "../constants";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

const HomePage = withLoader(lazy(() => import("pages/HomePage")));
const PostsPage = withLoader(lazy(() => import("pages/PostsPage")));
const Status404 = withLoader(lazy(() => import("pages/Status404")));

const routes: RouteObject[] = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: constants.routes.HOME,
        element: <HomePage />,
      },
      // Just in case user types home in url - will be redirect to / url
      {
        path: "home",
        element: <Navigate to="/" replace />,
      },
      {
        path: constants.routes.POSTS,
        element: <PostsPage />,
      },
      {
        path: "status",
        children: [
          {
            path: "",
            element: <Navigate to="404" replace />,
          },
          {
            path: "404",
            element: <Status404 />,
          },
        ],
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
];

export default routes;

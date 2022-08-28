import Layout from "components/ui/Layout";
import withLoader from "HOC/withLoader";
import constants from "../constants";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";
import SidebarLayout from "components/ui/SidebarLayout";

const HomePage = withLoader(lazy(() => import("pages/HomePage")));
const ReactQueryPage = withLoader(lazy(() => import("pages/ReactQueryPage")));
const PostsPage = withLoader(lazy(() => import("pages/PostsPage")));
const PostPage = withLoader(lazy(() => import("pages/PostPage")));
const LazySpaPage = withLoader(lazy(() => import("pages/LazySpaPage")));
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
  {
    path: "react-query",
    element: <SidebarLayout />,
    children: [
      {
        path: constants.routes.REACT_QUERY,
        element: <ReactQueryPage />,
        children: [
          {
            path: "",
            element: <Navigate to={constants.routes.POSTS} replace />,
          },
          {
            path: constants.routes.POSTS,
            element: <PostsPage />,
          },
          {
            path: constants.routes.POST,
            element: <PostPage />,
          },
          {
            path: constants.routes.LAZY_SPA,
            element: <LazySpaPage />,
          },
        ],
      },
    ],
  },
];

export default routes;

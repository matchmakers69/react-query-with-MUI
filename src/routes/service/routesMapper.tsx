import { lazy } from "react";
import constants from "../../constants";

type Children = {
  key: string;
  index?: boolean;
  component: React.ComponentType;
  title?: string;
  path?: string;
};

type Route = {
  key: string;
  title: string;
  path: string;
  index?: boolean;
  component: React.ComponentType;
  children?: Children[];
};

const HomePage = lazy(() => import("pages/HomePage"));
const PostsPage = lazy(() => import("pages/PostsPage"));

export const appRoutes: Route[] = [
  {
    key: "home",
    title: "HomePage",
    path: constants.routes.HOME,
    component: HomePage,
  },
  {
    key: "posts",
    title: "Posts",
    path: constants.routes.POSTS,
    component: PostsPage,
  },
];

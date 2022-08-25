import jsonPlaceholderClient from "config/axios/JsonPlaceholderClient";
import { Post } from "types/posts";

export const fetchPosts = async (): Promise<Post[]> => {
  const result = await jsonPlaceholderClient.get(`/posts?_limit=10&_page=0`);
  return result.data;
};

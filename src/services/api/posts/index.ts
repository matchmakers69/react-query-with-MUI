import jsonPlaceholderClient from "config/axios/JsonPlaceholderClient";
import { Comment } from "types/posts/comments";
import { Post } from "types/posts/posts";

export const fetchPosts = async (pageNum: number): Promise<Post[]> => {
  const result = await jsonPlaceholderClient.get(
    `/posts?_limit=10&_page=${pageNum}`
  );
  return result.data;
};

export const fetchPostById = async (id: number): Promise<Post> => {
  const result = await jsonPlaceholderClient.get(`/posts/${id}`);
  return result.data;
};

export const fetchCommentsById = async (postId: number): Promise<Comment[]> => {
  const result = await jsonPlaceholderClient.get(`/comments?postId=${postId}`);
  return result.data;
};

export const deletePostById = async (postId: number): Promise<void> => {
  const result = await jsonPlaceholderClient.delete(`/postId=${postId}`);
  return result.data;
};

export const updatePostById = async (postId: number) => {
  const result = await jsonPlaceholderClient.patch(`/postId=${postId}`, {
    data: { title: "React Query title update" },
  });
  return result.data;
};

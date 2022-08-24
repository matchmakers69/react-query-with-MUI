import { fetchPosts } from "services/api/fetchPopularMovies";
import LoadingIndicator from "components/ui/LoadingIndicator";
import { useQuery } from "react-query";

const PostsList = () => {
  // isLoding - boolean (once is falsed we return data)
  const { data: posts, isLoading } = useQuery("posts", fetchPosts);
  if (isLoading) {
    return <LoadingIndicator />;
  }
  return <div>PostsList</div>;
};

export default PostsList;

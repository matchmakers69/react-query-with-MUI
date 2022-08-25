import { fetchPosts } from "services/api/fetchPopularMovies";
import LoadingIndicator from "components/ui/LoadingIndicator";
import { useQuery } from "react-query";
import FetchingError from "components/ui/FetchingError";

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery("posts", fetchPosts, {
    staleTime: 2000,
  });
  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    return (
      <FetchingError
        errorMessage="Sorry, error with fetching posts"
        errorType={
          typeof error === "object" && error !== null && error.toString()
        }
      />
    );
  }
  return <div>PostsList</div>;
};

export default PostsList;

import FetchingError from "components/ui/FetchingError";
import LoadingIndicator from "components/ui/LoadingIndicator";
import { useQuery } from "react-query";
import { fetchCommentsById } from "services/api/posts";
import { Post } from "types/posts/posts";
import CommentsContent from "../CommentsContent";

type PostDetailProps = {
  post: Post;
};

const PostDetail = ({ post }: PostDetailProps) => {
  const {
    isError,
    data: comments,
    isLoading,
  } = useQuery(["comments"], () => fetchCommentsById(post?.id), {
    enabled: !!post,
  });

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    return <FetchingError errorMessage="Sorry, error with fetching posts" />;
  }

  return <>{comments && <CommentsContent comments={comments} />}</>;
};

export default PostDetail;

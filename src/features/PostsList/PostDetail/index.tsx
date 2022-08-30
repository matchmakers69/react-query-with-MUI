import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FetchingError from "components/ui/FetchingError";
import LoadingIndicator from "components/ui/LoadingIndicator";
import { useMutation, useQuery } from "react-query";
import { deletePostById, fetchCommentsById } from "services/api/posts";
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
  } = useQuery(["comments", post.id], () => fetchCommentsById(post?.id), {
    enabled: !!post,
  });

  const deleteMutation = useMutation((postId: number) =>
    deletePostById(postId)
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    return <FetchingError errorMessage="Sorry, error with fetching posts" />;
  }

  return (
    <>
      <Box>
        <Typography variant="body2">{post.body}</Typography>
        <Box py={3}>
          <Button
            onClick={() => deleteMutation.mutate(post.id)}
            variant="outlined"
          >
            Delete
          </Button>
        </Box>
        {comments && <CommentsContent comments={comments} />}
      </Box>
    </>
  );
};

export default PostDetail;

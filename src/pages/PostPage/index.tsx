import FetchingError from "components/ui/FetchingError";
import LoadingIndicator from "components/ui/LoadingIndicator";
import Page from "components/ui/Page";
import PageTitleWrapper from "components/ui/PageTitleWrapper";
import PostDetail from "features/PostsList/PostDetail";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchPostById } from "services/api/posts";

const PostPage = () => {
  const { id } = useParams();

  const {
    data: postContent,
    isError,
    isLoading,
  } = useQuery(["post", id], () => fetchPostById(Number(id)), {
    enabled: !!id,
  });

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    return <FetchingError errorMessage="Sorry, error with fetching posts" />;
  }

  return (
    <PageTitleWrapper>
      <Page title={postContent?.title ?? ""}>Post content here</Page>
      {postContent && <PostDetail post={postContent} />}
    </PageTitleWrapper>
  );
};

export default PostPage;

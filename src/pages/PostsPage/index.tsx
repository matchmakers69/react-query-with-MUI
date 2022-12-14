import Page from "components/ui/Page";
import PageTitleWrapper from "components/ui/PageTitleWrapper";
import PostsList from "features/PostsList";

const PostsPage = () => {
  return (
    <PageTitleWrapper>
      <Page title="Posts">
        <PostsList />
      </Page>
    </PageTitleWrapper>
  );
};

export default PostsPage;

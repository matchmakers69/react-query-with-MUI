import { fetchPosts } from "services/api/posts";
import LoadingIndicator from "components/ui/LoadingIndicator";
import { useQuery } from "react-query";
import FetchingError from "components/ui/FetchingError";
import { ListItem, ListItemText, List, Button, Grid } from "@mui/material";
import { useState } from "react";
import { Post } from "types/posts/posts";
import SinglePost from "./SinglePost";

const PostsList = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery("posts", fetchPosts, {
    staleTime: 2000,
  });

  const handleSelectPost = (post: Post) => {
    console.log(post);
    setSelectedPost(post);
  };

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
  return (
    <>
      <Grid
        container
        columnSpacing={{
          xs: 3,
          md: 4,
        }}
        rowSpacing={{
          xs: 3,
          md: 4,
        }}
      >
        {posts?.map((post) => {
          return (
            <Grid key={post.id} item xs={12} sm={12} md={4}>
              <SinglePost post={post} />
            </Grid>

            // <ListItem
            //   key={post.id}
            //   sx={{
            //     py: 1.5,
            //   }}
            // >
            //   <ListItemText
            //     primary={post.title}
            //     primaryTypographyProps={{ variant: "subtitle2" }}
            //   />
            //   <Button
            //     onClick={() => handleSelectPost(post)}
            //     variant="contained"
            //   >
            //     Show comments
            //   </Button>
            // </ListItem>
          );
        })}
      </Grid>
    </>
  );
};

export default PostsList;

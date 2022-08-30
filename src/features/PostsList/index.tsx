import { fetchPosts } from "services/api/posts";
import LoadingIndicator from "components/ui/LoadingIndicator";
import { useQuery, useQueryClient } from "react-query";
import FetchingError from "components/ui/FetchingError";
import { ListItem, ListItemText, List, Button, Grid, Box } from "@mui/material";
import SinglePost from "./SinglePost";
import { useEffect, useState } from "react";

const maxPostPage = 10;

const PostsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery(["posts", currentPage], () => fetchPosts(currentPage), {
    staleTime: 2000,
    keepPreviousData: true, // just in case we want to keep data in cache when user clicks prev
  });

  // To avoid showing loading indicator every time user clicks next button, we can use prefetching and listen currentPage in useEffect
  useEffect(() => {
    // if we are on the last page there is no data to prefetch
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["posts", nextPage], () =>
        fetchPosts(nextPage)
      );
    }
  }, [currentPage, queryClient]);

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
      <Box mb={2}>
        <Grid
          container
          columnSpacing={{
            xs: 3,
            md: 4,
          }}
        >
          <Grid display="flex" justifyContent="space-between" item xs={12}>
            <Button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage <= 1}
              variant="contained"
            >
              Prev
            </Button>
            <Button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage >= maxPostPage}
              variant="contained"
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
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

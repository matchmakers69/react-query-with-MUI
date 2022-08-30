import { Box, Button, Card, Link, Typography, useTheme } from "@mui/material";
import constants from "../../../constants";
import { Post } from "types/posts/posts";

type SinglePostProps = {
  post: Post;
};

const SinglePost = ({ post }: SinglePostProps) => {
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        p: 3,
        background: `${theme.colors.alpha.black[5]}`,
      }}
    >
      <Link
        href={`${constants.routes.POSTS}/${post.id}`}
        variant="h3"
        color="text.secondary.light"
      >
        {post.title}
      </Link>
      <Typography
        sx={{
          pb: 2,
        }}
        color="text.secondary.light"
      >
        {post.body}
      </Typography>
      <Box pt={2}>
        <Button
          href={`${constants.routes.POSTS}/${post.id}`}
          size="large"
          variant="outlined"
        >
          Read post
        </Button>
      </Box>
    </Card>
  );
};

export default SinglePost;

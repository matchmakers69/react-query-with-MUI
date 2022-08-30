import { Box, Avatar, Typography, Card, styled, Divider } from "@mui/material";

import {
  formatDistance,
  format,
  subDays,
  subHours,
  subMinutes,
} from "date-fns";
import { Comment } from "types/posts/comments";
import ScheduleTwoToneIcon from "@mui/icons-material/ScheduleTwoTone";

const DividerWrapper = styled(Divider)(
  ({ theme }) => `
      .MuiDivider-wrapper {
        border-radius: ${theme.general.borderRadiusSm};
        text-transform: none;
        background: ${theme.palette.background.default};
        font-size: ${theme.typography.pxToRem(13)};
        color: ${theme.colors.alpha.black[50]};
      }
`
);

const CardWrapperSecondary = styled(Card)(
  ({ theme }) => `
     background: ${theme.colors.alpha.white[80]};
      color: ${theme.palette.secondary.light};
      padding: ${theme.spacing(1.5)};
      border-radius: ${theme.general.borderRadiusXl};
      border-top-right-radius: ${theme.general.borderRadius};
      max-width: 100%;
      display: inline-flex;
`
);

type CommentsContentProps = {
  comments: Comment[];
};

const CommentsContent = ({ comments }: CommentsContentProps) => {
  return (
    <Box p={3}>
      <DividerWrapper>
        {format(subDays(new Date(), 3), "MMMM dd yyyy")}
      </DividerWrapper>
      {comments.map((comment) => {
        return (
          <Box
            key={comment.id}
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            py={3}
          >
            <Box
              display="flex"
              alignItems="flex-start"
              flexDirection="column"
              justifyContent="flex-start"
              ml={2}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: 50,
                  height: 50,
                }}
                alt="Zain Baptista"
                src="/static/images/avatars/2.jpg"
              />
              <Typography variant="h4" component="h4">
                {comment.email}
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="flex-start"
              flexDirection="column"
              justifyContent="flex-start"
              ml={2}
            >
              <CardWrapperSecondary>{comment.body}</CardWrapperSecondary>
              <Typography
                variant="subtitle1"
                sx={{
                  pt: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ScheduleTwoToneIcon
                  sx={{
                    mr: 0.5,
                  }}
                  fontSize="small"
                />
                {formatDistance(subHours(new Date(), 115), new Date(), {
                  addSuffix: true,
                })}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CommentsContent;

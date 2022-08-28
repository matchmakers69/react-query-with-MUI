import { useContext } from "react";

import {
  Box,
  Drawer,
  styled,
  Divider,
  useTheme,
  Button,
  darken,
  lighten,
  alpha,
} from "@mui/material";

import SidebarMenu from "./SidebarMenu";
import { SidebarContext } from "context/SidebarContext";
import Scrollbar from "components/ui/Scrollbar";

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
       color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

const Sidebar = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: "none",
            lg: "inline-block",
          },
          position: "fixed",
          left: 0,
          top: 0,
          background:
            theme.palette.mode === "dark"
              ? theme.sidebar.background
              : darken(theme.colors.alpha.black[100], 0.5),
          boxShadow:
            theme.palette.mode === "dark" ? theme.sidebar.boxShadow : "none",
        }}
      >
        <Scrollbar>
          <Box mt={3}>
            <Box
              mx={2}
              sx={{
                width: 52,
              }}
            ></Box>
          </Box>
          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.colors.alpha.white[10],
            }}
          />
          <SidebarMenu />
        </Scrollbar>
        <Divider
          sx={{
            background: theme.colors.alpha.white[10],
          }}
        />
        <Box p={2}>
          <Button
            href="https://tanstack.com/query/v4/docs/guides/does-this-replace-client-state?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/does-this-replace-client-state"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="success"
            size="small"
            fullWidth
          >
            State management
          </Button>
        </Box>
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
        }}
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background: theme.palette.mode === "dark" && theme.colors.primary,
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box
                mx={2}
                sx={{
                  width: 52,
                }}
              >
                Logo here
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.white[10],
              }}
            />
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
};

export default Sidebar;

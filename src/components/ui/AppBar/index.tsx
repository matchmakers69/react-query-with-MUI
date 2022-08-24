import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState, MouseEvent } from "react";
import { appRoutes } from "routes/service/routesMapper";
import Logo from "../Logo";

const AppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path: string) => {
    setAnchorElNav(null);
    if (path) {
      navigate(path);
    }
  };

  return (
    <>
      <MuiAppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {appRoutes
                  ?.filter((route) => {
                    return route.title !== "Movie Details";
                  })
                  .map((page) => {
                    return (
                      <Button
                        key={page.key}
                        onClick={() => handleCloseNavMenu(page.path)}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {page.title}
                      </Button>
                    );
                  })}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              React Query
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}
            >
              {appRoutes
                ?.filter((route) => {
                  return route.title !== "Movie Details";
                })
                .map((page) => {
                  return (
                    <Button
                      key={page.key}
                      onClick={() => handleCloseNavMenu(page.path)}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.title}
                    </Button>
                  );
                })}
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </>
  );
};

export default AppBar;

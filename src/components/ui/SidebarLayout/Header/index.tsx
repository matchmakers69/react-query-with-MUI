import { alpha, Divider, Stack, useTheme } from "@mui/material";
import * as S from "./Header.styled";
import { SidebarContext } from "context/SidebarContext";
import { useContext } from "react";

const Header = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  return (
    <S.HeaderWrapper display="flex" alignItems="center">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      ></Stack>
    </S.HeaderWrapper>
  );
};

export default Header;

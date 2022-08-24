import * as S from "./Logo.styled";
import constanst from "../../../constants";
import { Typography } from "@mui/material";
const Logo = () => {
  return (
    <S.LogoLink to={constanst.routes.HOME}>
      <Typography component="span">React</Typography>
      <Typography
        sx={{
          fontWeight: 300,
        }}
        component="span"
      >
        Query
      </Typography>
    </S.LogoLink>
  );
};

export default Logo;

import { Button as MUIButton } from "@mui/material";

export const Button = (children, onClick) => {
  return <MUIButton onClick={onClick}>{children}</MUIButton>;
};

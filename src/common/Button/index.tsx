import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
  isLastChild = false,
  fontSize,
}: ButtonProps) => (
  <StyledButton
    isLastChild={isLastChild}
    color={color}
    fixedWidth={fixedWidth}
    onClick={onClick}
    fontSize={fontSize}
  >
    {children}
  </StyledButton>
);

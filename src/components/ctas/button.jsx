import { CTA_Button } from "./button.styles";

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  width,
  type = "button",
  onClick,
}) => {
  return (
    <CTA_Button
      type={type}
      $variant={variant}
      $size={size}
      $width={width}
      onClick={onClick}
    >
      {children}
    </CTA_Button>
  );
};

import { CTA_Button } from "./button.styles";

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  width,
  tabletWidth,
  mobileWidth,
  type = "button",
  onClick,
  ...props
}) => {
  return (
    <CTA_Button
      type={type}
      $variant={variant}
      $size={size}
      $width={width}
      $tabletWidth={tabletWidth}
      $mobileWidth={mobileWidth}
      onClick={onClick}
      {...props}
    >
      {children}
    </CTA_Button>
  );
};

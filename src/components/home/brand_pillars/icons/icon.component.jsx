import { IconContainer } from "./icon.styles";

export const Icon = ({
  icon: IconComponent,
  size = 48,
  color,
  strokeWidth,
  label,
  className,
  ...props
}) => {
  if (!IconComponent) {
    return null;
  }

  return (
    <IconContainer
      $size={size}
      $color={color}
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <IconComponent strokeWidth={strokeWidth} focusable="false" {...props} />
    </IconContainer>
  );
};

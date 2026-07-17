export const CoffeeCupIcon = ({
  size = 54,
  color = "currentColor",
  strokeWidth = 1.8,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 18H43V35C43 43.2843 36.2843 50 28 50C19.7157 50 13 43.2843 13 35V20C13 18.8954 13.8954 18 15 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M43 23H48C52.4183 23 56 26.5817 56 31C56 35.4183 52.4183 39 48 39H43"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M18 18V14C18 11.7909 19.7909 10 22 10H39C41.2091 10 43 11.7909 43 14V18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M23 29C23 26.7909 24.7909 25 27 25C29.2091 25 31 26.7909 31 29C31 31.2091 29.2091 33 27 33C24.7909 33 23 31.2091 23 29Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <path
        d="M18 55H49"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

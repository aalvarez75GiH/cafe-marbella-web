const BaseIcon = ({ children, ...props }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
};

export const MountainIcon = (props) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M5 37L17.5 17L24 26L30 18L43 37H5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14 37L21 28L25 32L30 26L37 37"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M17.5 17L21 22L24 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export const CoffeeBeanIcon = (props) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M34.5 8.5C25 7.5 13 14 10 25.5C7.5 35 13 41 21 40C31.5 38.5 39.5 27 38 17.5C37.5 13.5 36.5 10 34.5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M33.5 10C27 16 23.5 22.5 23 29C22.5 33 20.5 36.5 17.5 39"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
};

export const LeafIcon = (props) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M39 9C28 10.5 19 15.5 16 25C13.5 33 18.5 38.5 26 36.5C35 34 39 23 39 9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M10 39C16 29.5 23.5 22 34 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M17 29C13 28 10 26 8 22C14.5 20.5 19 22 21.5 25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export const HeartIcon = (props) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M24 39L8.5 24.5C2.5 18.5 6 8.5 14.5 8.5C19 8.5 22 11 24 14C26 11 29 8.5 33.5 8.5C42 8.5 45.5 18.5 39.5 24.5L24 39Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

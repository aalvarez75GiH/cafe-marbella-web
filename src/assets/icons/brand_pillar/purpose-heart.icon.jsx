export const PurposeHeartIcon = ({ strokeWidth = 1.8, ...props }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="
            M24 39.5
            C20.8 36.6 11.2 29.3 8.2 24.6
            C4.8 19.3 6.2 12.2 11.8 9.6
            C16.2 7.5 21.1 9.2 24 13
            C26.9 9.2 31.8 7.5 36.2 9.6
            C41.8 12.2 43.2 19.3 39.8 24.6
            C36.8 29.3 27.2 36.6 24 39.5
            Z
          "
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

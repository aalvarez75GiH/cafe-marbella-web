export const ArabicaLeafIcon = ({ strokeWidth = 1.8, ...props }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Left leaf */}
      <path
        d="
            M24 24
            C21.2 15.8 14.8 10.8 7.8 10.2
            C7.6 17.4 10.7 23.4 15.8 26.8
            C18.4 28.6 21.2 29.2 24 29
          "
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right leaf */}
      <path
        d="
            M24 24
            C26.8 15.8 33.2 10.8 40.2 10.2
            C40.4 17.4 37.3 23.4 32.2 26.8
            C29.6 28.6 26.8 29.2 24 29
          "
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Stem */}
      <path
        d="M24 24V39"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

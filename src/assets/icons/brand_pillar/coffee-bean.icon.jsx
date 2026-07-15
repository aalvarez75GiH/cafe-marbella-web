export const CoffeeBeanIcon = ({ strokeWidth = 1.8, ...props }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Rounded bean silhouette */}
      <path
        d="
            M38.2 9.8
            C32.7 4.9 23.1 5.6 16.1 11
            C9.4 16.1 5.8 24.8 8.1 32
            C10.4 39.1 18.1 43 26 41.3
            C34.2 39.6 40.6 32.7 41.4 24.2
            C42 18.2 41 12.4 38.2 9.8
            Z
          "
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Smooth central coffee-bean groove */}
      <path
        d="
            M37.4 9.4
            C35.6 14.2 32.7 18.2 28.7 20.9
            C25.6 23 22 24.2 18.9 26
            C14.7 28.4 11.9 31.7 9.8 35.2
          "
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

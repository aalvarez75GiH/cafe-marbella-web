export const CapIcon = (props) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Rounded crown */}
      <path
        d="M11.5 27.5V24.5C11.5 16.8 16.9 11 24 11C31.1 11 36.5 16.8 36.5 24.5V27.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Front panel */}
      <path
        d="M17.2 13.2C19.4 16.5 20.3 20.2 20.4 25.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M30.8 13.2C28.6 16.5 27.7 20.2 27.6 25.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Center seam */}
      <path
        d="M24 11V25.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Brim connection */}
      <path
        d="M11.8 27.5C17.8 24.9 24.2 24.3 30.4 25.5C34.4 26.3 37.7 27.8 40.3 29.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Curved brim */}
      <path
        d="M11.6 27.8C8.5 29.3 6.8 31.3 6.7 33.2C6.6 34.8 8 35.7 10.1 35.2C14.5 34.1 18.3 32.6 22.2 30.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M10.2 35.2C14.7 35.3 19.3 34.2 23.3 32.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Top button */}
      <circle cx="24" cy="9" r="1.4" stroke="currentColor" strokeWidth="1.8" />

      {/* Subtle front stitch */}
      <path
        d="M21.8 20.2C23.2 19.4 24.8 19.4 26.2 20.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

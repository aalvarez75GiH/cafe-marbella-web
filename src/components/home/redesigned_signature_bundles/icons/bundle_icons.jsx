const SharedIcon = ({ children, ...props }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
};

export const CoffeeIcon = (props) => {
  return (
    <SharedIcon {...props}>
      <path
        d="M18.9 5.8C13.6 7.1 9.8 12 10.4 17.2c.5 4.5 4.2 8.2 8.8 8.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M13.1 26.2C18.4 24.9 22.2 20 21.6 14.8c-.5-4.5-4.2-8.2-8.8-8.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M18.9 5.8c-4 4.1-6 8.4-5.8 12.8.1 2.6 1 5.1 2.7 7.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </SharedIcon>
  );
};

export const MugIcon = (props) => {
  return (
    <SharedIcon {...props}>
      <path
        d="M8 9h13v12.2A4.8 4.8 0 0 1 16.2 26h-3.4A4.8 4.8 0 0 1 8 21.2V9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M21 12h2a3.5 3.5 0 0 1 0 7h-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M11 6.5c0-1.1.9-1.7.9-2.7M16 6.5c0-1.1.9-1.7.9-2.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </SharedIcon>
  );
};

export const CapIcon = (props) => {
  return (
    <SharedIcon {...props}>
      <path
        d="M7.5 18.5c0-5 3.8-9 8.5-9s8.5 4 8.5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M7.5 18.5h17c-.8 2.1-3 3.2-6.2 3.2H14c-2.2 0-4.4.8-6 2.3H4.5c.8-2.4 1.8-4.2 3-5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M16 9.5v9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </SharedIcon>
  );
};

export const TShirtIcon = (props) => {
  return (
    <SharedIcon {...props}>
      <path
        d="m10 8-5 3 3 6 3-1v10h10V16l3 1 3-6-5-3c-.8 1.7-2.9 3-6 3s-5.2-1.3-6-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </SharedIcon>
  );
};

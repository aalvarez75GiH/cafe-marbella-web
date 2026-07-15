export const MountainOriginIcon = ({ strokeWidth = 1.8, ...props }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Taller rear mountain */}
      <path
        d="
            M32.35 21.45
  
            L28.15 13.9
  
            C26.75 11.45
             24.7 10.2
             22 10.2
  
            C19.3 10.2
             17.25 11.45
             15.85 13.9
  
            L3.65 35.05
  
            C3.2 35.85
             3.2 36.75
             3.65 37.5
  
            C4.1 38.25
             4.85 38.7
             5.75 38.7
  
            H27
          "
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Taller mountain snow line */}
      <path
        d="
            M12.25 20
  
            C14.3 18.45
             16.35 18.35
             18.55 19.65
  
            C21.15 21.2
             23.25 21.4
             25.65 20
  
            C27.6 18.85
             29.4 18.85
             31.2 19.75
          "
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Smaller front mountain */}
      {/* Smaller front mountain */}
      <path
        d="
    M27.2 38.7

    C26.3 38.7
     25.55 38.25
     25.1 37.5

    C24.65 36.75
     24.65 35.85
     25.1 35.05

    L32.2 22.75

    C33.3 20.85
     34.85 19.8
     36.95 19.8

    C39.05 19.8
     40.6 20.85
     41.7 22.75

    L47 31.95

    C47.45 32.75
     47.45 33.65
     47 34.45

    C46.45 35.4
     45.9 36.35
     45.25 37.45

    C44.8 38.25
     44.05 38.7
     43.15 38.7

    H27.2
  "
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Smaller mountain snow line */}
      <path
        d="
            M30.55 28.65
  
            C32.05 27.45
             33.55 27.4
             35.15 28.4
  
            C36.95 29.55
             38.45 29.7
             40.1 28.65
  
            C41.5 27.75
             42.8 27.75
             44.1 28.45
          "
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

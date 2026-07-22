import { useEffect, useState, useContext } from "react";

import { MobileGrindSelection } from "./mobile_grind_selection";
import { MobileRoastSelection } from "./mobile_roast_selection";
import { MobileProducts } from "./mobile_products";

import {
  FlowLoader,
  LoaderMark,
  LoaderSpinner,
  LoaderText,
  FlowViewport,
  FlowScreen,
} from "./mobile_coffee_flow.styles";
import { GeolocationContext } from "../../../infrastructure/services/geolocation/geolocation.context";

export const MobileCoffeeFlow = ({ products }) => {
  const { locationStatus, deviceLat, deviceLng } =
    useContext(GeolocationContext);
  const [isEntering, setIsEntering] = useState(true);

  const [step, setStep] = useState("grind");
  const [direction, setDirection] = useState("forward");

  const [selectedGrind, setSelectedGrind] = useState(null);
  const [selectedRoast, setSelectedRoast] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsEntering(false);
    }, 450);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const handleGrindSelect = (grindType) => {
    setDirection("forward");
    setSelectedGrind(grindType);
    setSelectedRoast(null);
    setStep("roast");
  };

  const handleRoastSelect = (roastType) => {
    setDirection("forward");
    setSelectedRoast(roastType);
    setStep("products");
  };

  const handleBack = () => {
    setDirection("backward");

    if (step === "products") {
      setStep("roast");
      return;
    }

    if (step === "roast") {
      setStep("grind");
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.active &&
      product.grindType === selectedGrind &&
      product.roast === selectedRoast
  );

  const renderStep = () => {
    if (step === "grind") {
      return (
        <MobileGrindSelection
          selectedGrind={selectedGrind}
          onGrindSelect={handleGrindSelect}
        />
      );
    }

    if (step === "roast") {
      return (
        <MobileRoastSelection
          selectedGrind={selectedGrind}
          selectedRoast={selectedRoast}
          onRoastSelect={handleRoastSelect}
          onBack={handleBack}
        />
      );
    }

    return (
      <MobileProducts
        products={filteredProducts}
        selectedGrind={selectedGrind}
        onBack={handleBack}
      />
    );
  };

  if (isEntering) {
    return (
      <FlowLoader role="status" aria-live="polite">
        <LoaderMark aria-hidden="true">
          <LoaderSpinner />
        </LoaderMark>

        <LoaderText>Preparing your coffee experience</LoaderText>
      </FlowLoader>
    );
  }

  return (
    <FlowViewport>
      <FlowScreen
        key={step}
        $direction={direction}
        $animate={step !== "grind" || direction === "backward"}
      >
        {renderStep()}
      </FlowScreen>
      <div
        style={{
          position: "fixed",
          bottom: 10,
          left: 10,
          right: 10,
          zIndex: 9999,
          background: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
          fontSize: "11px",
          fontFamily: "monospace",
        }}
      >
        <div>Status: {locationStatus}</div>
        <div>Lat: {String(deviceLat)}</div>
        <div>Lng: {String(deviceLng)}</div>
      </div>
    </FlowViewport>
  );
};
// import { useState, useEffect } from "react";

// import { MobileGrindSelection } from "./mobile_grind_selection";
// import { MobileRoastSelection } from "./mobile_roast_selection";
// import { MobileProducts } from "./mobile_products";

// import {
//   FlowLoader,
//   LoaderMark,
//   LoaderSpinner,
//   LoaderText,
// } from "./mobile_coffee_flow.styles";
// export const MobileCoffeeFlow = ({ products }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [step, setStep] = useState("grind");
//   const [selectedGrind, setSelectedGrind] = useState(null);
//   const [selectedRoast, setSelectedRoast] = useState(null);

//   useEffect(() => {
//     const timer = window.setTimeout(() => {
//       setIsLoading(false);
//     }, 950);

//     return () => {
//       window.clearTimeout(timer);
//     };
//   }, []);

//   const handleGrindSelect = (grindType) => {
//     setSelectedGrind(grindType);
//     setSelectedRoast(null);
//     setStep("roast");
//   };

//   const handleRoastSelect = (roastType) => {
//     setSelectedRoast(roastType);
//     setStep("products");
//   };

//   const handleBack = () => {
//     if (step === "products") {
//       setStep("roast");
//       return;
//     }

//     if (step === "roast") {
//       setStep("grind");
//     }
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.active &&
//       product.grindType === selectedGrind &&
//       product.roast === selectedRoast
//   );

//   if (isLoading) {
//     return (
//       <FlowLoader role="status" aria-live="polite">
//         <LoaderMark aria-hidden="true">
//           <LoaderSpinner />
//         </LoaderMark>

//         <LoaderText>Preparing your coffee experience</LoaderText>
//       </FlowLoader>
//     );
//   }

//   if (step === "grind") {
//     return (
//       <MobileGrindSelection
//         selectedGrind={selectedGrind}
//         onGrindSelect={handleGrindSelect}
//       />
//     );
//   }

//   if (step === "roast") {
//     return (
//       <MobileRoastSelection
//         selectedGrind={selectedGrind}
//         selectedRoast={selectedRoast}
//         onRoastSelect={handleRoastSelect}
//         onBack={handleBack}
//       />
//     );
//   }

//   return (
//     <MobileProducts
//       products={filteredProducts}
//       selectedGrind={selectedGrind}
//       onBack={handleBack}
//     />
//   );
// };

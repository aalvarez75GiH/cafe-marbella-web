import { useState, useMemo } from "react";

import { MobileGrindSelection } from "./mobile_grind_selection";
import { MobileRoastSelection } from "./mobile_roast_selection";
import { MobileProducts } from "./mobile_products";

import { getFilteredCoffeeProducts } from "../../../infrastructure/services/global/global.utils";
import { FlowViewport, FlowScreen } from "./mobile_coffee_flow.styles";

export const MobileCoffeeFlow = ({ products }) => {
  const [step, setStep] = useState("grind");
  const [direction, setDirection] = useState("forward");

  const [selectedGrind, setSelectedGrind] = useState(null);
  const [selectedRoast, setSelectedRoast] = useState(null);

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

  const filteredProducts = useMemo(() => {
    return getFilteredCoffeeProducts({
      products,
      selectedGrind,
      selectedRoast,
      activeOnly: true,
    });
  }, [products, selectedGrind, selectedRoast]);

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

  return (
    <FlowViewport>
      <FlowScreen
        key={step}
        $direction={direction}
        $animate={step !== "grind" || direction === "backward"}
      >
        {renderStep()}
      </FlowScreen>
    </FlowViewport>
  );
};

import { useNavigate } from "react-router-dom";
import { MobileCoffeeHeader } from "./mobile_coffee_header";

import {
  Screen,
  OptionsList,
  GrindOption,
  GrindImage,
  GrindLabel,
} from "./mobile_grind_selection.styles";

import ground_filter_image from "../../../assets/images/coffee_app/coffee_filters/ground_filter.png";
import whole_filter_image from "../../../assets/images/coffee_app/coffee_filters/whole_filter.png";

export const MobileGrindSelection = ({ selectedGrind, onGrindSelect }) => {
  const navigate = useNavigate();
  return (
    <Screen>
      <MobileCoffeeHeader
        title="Select your grind type"
        subtitle=""
        onBack={() => navigate("/")}
      />

      <OptionsList>
        <GrindLabel>Ground</GrindLabel>
        <GrindOption
          type="button"
          $active={selectedGrind === "ground"}
          onClick={() => onGrindSelect("ground")}
        >
          <GrindImage src={ground_filter_image} alt="Ground coffee" />
        </GrindOption>

        <GrindLabel>Whole</GrindLabel>
        <GrindOption
          type="button"
          $active={selectedGrind === "whole"}
          onClick={() => onGrindSelect("whole")}
        >
          <GrindImage src={whole_filter_image} alt="Whole bean coffee" />
        </GrindOption>
      </OptionsList>
    </Screen>
  );
};

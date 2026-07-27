import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "../../../assets/icons/ui/chevron_left.icon.jsx";

import {
  CoffeeTopBarContainer,
  CoffeeBackButton,
  CoffeeTopBarSpacer,
} from "./coffee_top_bar.styles";

export const CoffeeTopBar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <CoffeeTopBarContainer>
      <CoffeeBackButton
        type="button"
        aria-label="Return to homepage"
        onClick={handleBack}
      >
        <ChevronLeftIcon aria-hidden="true" />
      </CoffeeBackButton>

      <CoffeeTopBarSpacer aria-hidden="true" />
    </CoffeeTopBarContainer>
  );
};

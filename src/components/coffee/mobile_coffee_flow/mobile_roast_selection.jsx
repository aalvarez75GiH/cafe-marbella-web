import {
  MobileScreen,
  //   MobileTopBar,
  //   BackButton,
  //   ScreenTitle,
  Content,
  Intro,
  IntroTitle,
  IntroDescription,
  RoastOptions,
  RoastOption,
  RoastIconWrapper,
  RoastIcon,
  RoastText,
  RoastTitle,
  RoastDescription,
  ArrowCircle,
  ArrowIcon,
  FooterHint,
  FooterHintIcon,
  FooterHintText,
} from "./mobile_roast_selection.styles";

import lightRoastIcon from "../../../assets/images/coffee_app/coffee_filters/light_roast.png";
import mediumRoastIcon from "../../../assets/images/coffee_app/coffee_filters/medium_roast.png";
import darkRoastIcon from "../../../assets/images/coffee_app/coffee_filters/dark_roast.png";
// import { ChevronLeftIcon } from "../../../assets/icons/ui/chevron_left.icon";
import { MobileCoffeeHeader } from "./mobile_coffee_header";

const roastOptions = [
  {
    id: "light",
    title: "Light Roast",
    description:
      "The light roast highlights the original flavors of the coffee, with fruity and acidic notes.",
    icon: lightRoastIcon,
  },
  {
    id: "medium",
    title: "Medium Roast",
    description:
      "The medium roast offers a balance between the original flavors and the roasted flavors.",
    icon: mediumRoastIcon,
  },
  {
    id: "dark",
    title: "Dark Roast",
    description: "The dark roast highlights the roasted flavors of the coffee.",
    icon: darkRoastIcon,
  },
];

export const MobileRoastSelection = ({
  //   selectedGrind,
  selectedRoast,
  onRoastSelect,
  onBack,
}) => {
  //   const screenTitle =
  //     selectedGrind === "whole" ? "Whole bean coffee" : "Ground beans coffee";

  return (
    <MobileScreen>
      <MobileCoffeeHeader title="Select your roast" onBack={onBack} />

      <Content>
        <Intro>
          <IntroTitle>Tap an option to select your roast type</IntroTitle>

          <IntroDescription>
            Each roast brings out unique flavors and aromas.
          </IntroDescription>
        </Intro>

        <RoastOptions>
          {roastOptions.map((option) => {
            const isActive = selectedRoast === option.id;

            return (
              <RoastOption
                key={option.id}
                type="button"
                $active={isActive}
                onClick={() => onRoastSelect(option.id)}
                aria-pressed={isActive}
              >
                <RoastIconWrapper>
                  <RoastIcon src={option.icon} alt="" aria-hidden="true" />
                </RoastIconWrapper>

                <RoastText>
                  <RoastTitle>{option.title}</RoastTitle>
                  <RoastDescription>{option.description}</RoastDescription>
                </RoastText>

                <ArrowCircle aria-hidden="true">
                  <ArrowIcon>›</ArrowIcon>
                </ArrowCircle>
              </RoastOption>
            );
          })}
        </RoastOptions>

        <FooterHint>
          <FooterHintIcon aria-hidden="true">☝</FooterHintIcon>

          <FooterHintText>Tap a roast to see available coffees</FooterHintText>
        </FooterHint>
      </Content>
    </MobileScreen>
  );
};

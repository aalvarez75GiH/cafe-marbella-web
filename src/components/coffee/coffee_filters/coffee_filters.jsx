import {
  FiltersContainer,
  FilterByColumn,
  FilterByText,
  FiltersDivider,
  FilterSection,
  FilterTitle,
  FilterList,
  FilterCard,
  FilterIconWrapper,
  FilterIcon,
  FilterContent,
  FilterName,
  FilterDescription,
  FilterCheck,
} from "./coffee_filters.styles";

import groundIcon from "../../../assets/icons/coffee_app/coffee_filters/grind_type_icon_ground.png";
import wholeBeanIcon from "../../../assets/icons/coffee_app/coffee_filters/grind_type_icon_whole.png";

import lightRoastIcon from "../../../assets/icons/coffee_app/coffee_filters/roast_type_icon_light.png";
import mediumRoastIcon from "../../../assets/icons/coffee_app/coffee_filters/roast_type_icon_medium.png";
import darkRoastIcon from "../../../assets/icons/coffee_app/coffee_filters/roast_type_icon_dark.png";

const grindOptions = [
  {
    id: "ground",
    title: "Ground",
    description: "Best for drip and espresso.",
    icon: groundIcon,
  },
  {
    id: "whole",
    title: "Whole Bean",
    description: "Grind before brewing.",
    icon: wholeBeanIcon,
  },
];

const roastOptions = [
  {
    id: "light",
    title: "Light Roast",
    description: "Bright and fruity with vibrant, acidic notes.",
    icon: lightRoastIcon,
  },
  {
    id: "medium",
    title: "Medium Roast",
    description: "Balanced and smooth with rich flavors.",
    icon: mediumRoastIcon,
  },
  {
    id: "dark",
    title: "Dark Roast",
    description: "Bold and rich with intense, roasted notes.",
    icon: darkRoastIcon,
  },
];

export const CoffeeFilters = ({
  selectedGrind,
  selectedRoast,
  onGrindChange,
  onRoastChange,
}) => {
  return (
    <FiltersContainer aria-label="Coffee filters">
      <FilterByColumn>
        <FilterByText>Filter by</FilterByText>
      </FilterByColumn>

      <FiltersDivider aria-hidden="true" />

      <FilterSection>
        <FilterTitle>Grind Type</FilterTitle>

        <FilterList $columns={2}>
          {grindOptions.map((option) => {
            const isActive = selectedGrind === option.id;

            return (
              <FilterCard
                key={option.id}
                type="button"
                $active={isActive}
                onClick={() => onGrindChange(option.id)}
                aria-pressed={isActive}
              >
                <FilterIconWrapper>
                  <FilterIcon
                    src={option.icon}
                    alt=""
                    aria-hidden="true"
                    $iconType={option.id}
                  />
                </FilterIconWrapper>

                <FilterContent>
                  <FilterName>{option.title}</FilterName>

                  <FilterDescription>{option.description}</FilterDescription>
                </FilterContent>

                <FilterCheck $active={isActive} aria-hidden="true" />
              </FilterCard>
            );
          })}
        </FilterList>
      </FilterSection>

      <FiltersDivider aria-hidden="true" />

      <FilterSection $roast>
        <FilterTitle>Roast Level</FilterTitle>

        <FilterList $columns={3}>
          {roastOptions.map((option) => {
            const isActive = selectedRoast === option.id;

            return (
              <FilterCard
                key={option.id}
                type="button"
                $active={isActive}
                onClick={() => onRoastChange(option.id)}
                aria-pressed={isActive}
              >
                <FilterIconWrapper>
                  <FilterIcon
                    src={option.icon}
                    alt=""
                    aria-hidden="true"
                    $iconType={option.id}
                  />
                </FilterIconWrapper>

                <FilterContent>
                  <FilterName>{option.title}</FilterName>

                  <FilterDescription>{option.description}</FilterDescription>
                </FilterContent>

                <FilterCheck $active={isActive} aria-hidden="true" />
              </FilterCard>
            );
          })}
        </FilterList>
      </FilterSection>
    </FiltersContainer>
  );
};

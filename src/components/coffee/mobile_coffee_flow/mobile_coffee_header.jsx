import {
  Header,
  HeaderContent,
  BackButton,
  Title,
  Subtitle,
} from "./mobile_coffee_header.styles";

import { ChevronLeftIcon } from "../../../assets/icons/ui/chevron_left.icon";

export const MobileCoffeeHeader = ({ title, subtitle, onBack }) => {
  return (
    <Header>
      <HeaderContent>
        {onBack ? (
          <BackButton type="button" onClick={onBack} aria-label="Go back">
            <ChevronLeftIcon size={26} />
          </BackButton>
        ) : (
          <div />
        )}

        <div>
          <Title>{title}</Title>

          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </div>

        <div />
      </HeaderContent>
    </Header>
  );
};

import {
  Pillar,
  PillarIconContainer,
  PillarContent,
  PillarTitle,
  PillarDescription,
} from "./brand_pillars_styles";

import { Icon } from "./icons/icon.component";

export const BrandPillar = ({ Icon: PillarIcon, title, description }) => {
  return (
    <Pillar>
      <PillarIconContainer>
        <Icon icon={PillarIcon} size="100%" strokeWidth={2.2} />
      </PillarIconContainer>

      <PillarContent>
        <PillarTitle>{title}</PillarTitle>

        <PillarDescription>{description}</PillarDescription>
      </PillarContent>
    </Pillar>
  );
};

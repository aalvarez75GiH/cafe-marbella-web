import { categoryItems } from "./shop_categories.data";
import { ShopCategoryCard } from "./shop_category_card.component";
import { useScrollReveal } from "../../../hooks/use_scroll_reveal";

import {
  CardReveal,
  CardsContainer,
  Section,
  SectionReveal,
} from "./shop_categories.styles";

export const ShopCategories = () => {
  const { elementRef, isVisible } = useScrollReveal({
    threshold: 0.2,
    rootMargin: "0px 0px -80px 0px",
    triggerOnce: false,
  });
  return (
    <Section ref={elementRef}>
      <SectionReveal $isVisible={isVisible}>
        <CardsContainer>
          {categoryItems.map((category, index) => (
            <CardReveal key={category.id} $isVisible={isVisible} $index={index}>
              <ShopCategoryCard category={category} />
            </CardReveal>
          ))}
        </CardsContainer>
      </SectionReveal>
    </Section>
  );
};

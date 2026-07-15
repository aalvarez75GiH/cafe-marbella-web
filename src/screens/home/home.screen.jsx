import { Hero_Component } from "../../components/home/hero/hero.component";
import { BrandPillarsSection } from "../../components/home/brand_pillars/brand_pillars_section.component";

export const HomeScreen = () => {
  return (
    <main>
      <Hero_Component />
      <BrandPillarsSection />
    </main>
  );
};

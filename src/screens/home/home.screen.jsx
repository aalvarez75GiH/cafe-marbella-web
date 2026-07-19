// import { Hero_Component } from "../../components/home/hero/hero.component";
import { BrandPillarsSection } from "../../components/home/brand_pillars/brand_pillars_section.component";
import { ShopCategories } from "../../components/home/shop_categories/shop_categories.component";
import { SignatureBundles } from "../../components/home/signature_bundles/signature_bundles.component";
import { StoryImpactSection } from "../../components/home/our_story_foundation/story_impact_section";
import { CommunitySocialSection } from "../../components/home/social/community_social_section";
import { FooterSection } from "../../components/home/footer/footer.component";
import { NewHero_Component } from "../../components/home/hero/new_hero.component";

export const HomeScreen = () => {
  return (
    <main>
      {/* <Hero_Component /> */}
      <NewHero_Component />
      <BrandPillarsSection />
      <ShopCategories />
      <SignatureBundles />
      <StoryImpactSection />
      <CommunitySocialSection />
      <FooterSection />
    </main>
  );
};

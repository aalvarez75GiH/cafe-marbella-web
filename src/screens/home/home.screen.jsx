import { Hero_Component } from "../../components/home/hero/hero.component";
import { BrandPillarsSection } from "../../components/home/brand_pillars/brand_pillars_section.component";
import { ShopCategories } from "../../components/home/shop_categories/shop_categories.component";
// import { SignatureBundles } from "../../components/home/signature_bundles/signature_bundles.component";
import { RedesignedSignatureBundles } from "../../components/home/redesigned_signature_bundles/signature_bundles.component";

export const HomeScreen = () => {
  return (
    <main>
      <Hero_Component />
      <BrandPillarsSection />
      <ShopCategories />
      <RedesignedSignatureBundles />
    </main>
  );
};

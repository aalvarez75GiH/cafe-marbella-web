import { useContext } from "react";

// import { Hero_Component } from "../../components/home/hero/hero.component";
import { BrandPillarsSection } from "../../components/home/brand_pillars/brand_pillars_section.component";
import { ShopCategories } from "../../components/home/shop_categories/shop_categories.component";
import { SignatureBundles } from "../../components/home/signature_bundles/signature_bundles.component";
import { StoryImpactSection } from "../../components/home/our_story_foundation/story_impact_section";
import { CommunitySocialSection } from "../../components/home/social/community_social_section";
import { FooterSection } from "../../components/home/footer/footer.component";
import { NewHero_Component } from "../../components/home/hero/new_hero.component";
import { VideoHero } from "../../components/home/video_hero/video_hero";
import { ProductsHero } from "../../components/home/products_hero/products_hero.component";

import { GlobalContext } from "../../infrastructure/services/global/global.context";
export const HomeScreen = () => {
  const { productsCatalog, isProductsLoading, productsError } =
    useContext(GlobalContext);

  return (
    <main>
      <VideoHero />
      <ProductsHero
        products={productsCatalog}
        isLoading={isProductsLoading}
        error={productsError}
        onOrderNow={(product) => {
          console.log("Selected product:", product);
        }}
      />
      {/* <NewHero_Component /> */}
      <BrandPillarsSection />
      <ShopCategories />
      <SignatureBundles />
      <StoryImpactSection />
      <CommunitySocialSection />
      <FooterSection />
    </main>
  );
};

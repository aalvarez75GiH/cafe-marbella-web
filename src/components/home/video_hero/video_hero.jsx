import {
  VideoHeroSection,
  VideoBackground,
  VideoOverlay,
  VideoHeroContent,
  VideoHeroContentInner,
  VideoHeroEyebrow,
  VideoHeroTitle,
  VideoHeroDescription,
  VideoHeroButton,
  ScrollIndicator,
  ScrollLine,
  FlagSignature,
  FlagImage,
} from "./video_hero.styles";

import heroVideo from "../../../assets/videos/tentative_video.mp4";
import heroPoster from "../../../assets/videos/video_hero_poster.png";
import venezuelanFlag from "../../../assets/images/hero/venezuelan_flag.png";

export const VideoHero = () => {
  const handleExploreClick = () => {
    const currentHero = document.getElementById("main-hero");

    currentHero?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <VideoHeroSection>
      <VideoBackground
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroPoster}
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </VideoBackground>

      <VideoOverlay />

      <VideoHeroContent>
        <VideoHeroContentInner>
          <VideoHeroEyebrow>From Venezuela to your cup</VideoHeroEyebrow>

          <VideoHeroTitle>
            Coffee with a story
            <br />
            worth sharing.
          </VideoHeroTitle>

          <VideoHeroDescription>
            Discover premium Venezuelan coffee, carefully selected and roasted
            to create an unforgettable experience.
          </VideoHeroDescription>

          <VideoHeroButton type="button" onClick={handleExploreClick}>
            Discover our coffee
          </VideoHeroButton>
          <FlagSignature aria-label="Venezuelan coffee origin">
            <FlagImage
              src={venezuelanFlag}
              alt="Venezuelan flag painted with brush strokes"
            />
          </FlagSignature>
        </VideoHeroContentInner>
      </VideoHeroContent>

      <ScrollIndicator aria-hidden="true">
        <span>Scroll to explore</span>
        <ScrollLine />
      </ScrollIndicator>
    </VideoHeroSection>
  );
};

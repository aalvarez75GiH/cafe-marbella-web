import galleryImageOne from "../../../assets/images/social/gallery_1.png";
import galleryImageTwo from "../../../assets/images/social/gallery_2.png";
import galleryImageThree from "../../../assets/images/social/gallery_3.png";
import galleryImageFour from "../../../assets/images/social/gallery_4.png";

import {
  GalleryContainer,
  GalleryLink,
  GalleryImage,
  SocialFooter,
  SocialHandle,
  SocialLinks,
  SocialLink,
  SocialIcon,
} from "./social_gallery.styles";

const galleryItems = [
  {
    id: 1,
    image: galleryImageOne,
    alt: "Café Marbella coffee",
  },
  {
    id: 2,
    image: galleryImageTwo,
    alt: "Freshly prepared Café Marbella coffee",
  },
  {
    id: 3,
    image: galleryImageThree,
    alt: "Café Marbella coffee products",
  },
  {
    id: 4,
    image: galleryImageFour,
    alt: "Café Marbella community",
  },
];

const InstagramIcon = () => (
  <SocialIcon viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </SocialIcon>
);

const FacebookIcon = () => (
  <SocialIcon viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 8h3V4.5c-.6-.1-1.8-.2-3.2-.2-3.1 0-5.2 1.9-5.2 5.5V13H5v4h3.6v7h4.4v-7h3.6l.6-4H13v-2.8C13 8.9 13.4 8 14 8Z" />
  </SocialIcon>
);

const TikTokIcon = () => (
  <SocialIcon viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 4v10.1a4.6 4.6 0 1 1-3.7-4.5v3.8a1.5 1.5 0 1 0 .7 1.3V4h3Z" />
    <path d="M14 4c.4 2.2 1.7 3.5 4 4v3.4c-1.5-.1-2.8-.6-4-1.5" />
  </SocialIcon>
);

export const SocialGallery = () => {
  return (
    <>
      <GalleryContainer>
        {galleryItems.map((item) => (
          <GalleryLink
            key={item.id}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Café Marbella on Instagram"
          >
            <GalleryImage src={item.image} alt={item.alt} />
          </GalleryLink>
        ))}
      </GalleryContainer>

      <SocialFooter>
        <SocialHandle
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          @cafemarbellaus_
        </SocialHandle>

        <SocialLinks>
          <SocialLink
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </SocialLink>

          <SocialLink
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </SocialLink>

          <SocialLink
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </SocialLink>
        </SocialLinks>
      </SocialFooter>
    </>
  );
};

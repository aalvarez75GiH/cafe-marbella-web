import { useState } from "react";
// import { Link } from "react-router-dom";

import { CoffeeCupIcon } from "../../../assets/icons/footer/coffee_cup_icon";
import logoGreen from "../../../assets/logos/Logo.png";
import { InstagramIcon } from "../../../assets/icons/social/instagram_icon";
import { FacebookIcon } from "../../../assets/icons/social/facebook_icon";
import { TikTokIcon } from "../../../assets/icons/social/tiktok_icon";
import { contactItems, footerNavigation } from "./footer.data";
import visaLogo from "../../../assets/logos/payments/visa.png";
import masterLogo from "../../../assets/logos/payments/master.png";
import { VisaLogo } from "./footer.styles";
import { MastercardLogo } from "./footer.styles";

import {
  BottomBar,
  BottomBarContent,
  BrandDescription,
  BrandSection,
  ContactItem,
  ContactLink,
  ContactList,
  Footer,
  FooterContainer,
  FooterContent,
  FooterHeading,
  FooterLink,
  FooterLinksList,
  FooterLogo,
  FooterNavigation,
  FooterNavigationColumn,
  NewsletterDescription,
  NewsletterEyebrow,
  NewsletterText,
  PaymentIcons,
  //   PaymentBadge,
  PaymentMethods,
  PaymentTitle,
  SocialLink,
  SocialLinks,
  VenezuelaSignature,
  NewsletterIntro,
  NewsletterIconWrapper,
  NewsletterContent,
  NewsletterSection,
  NewsletterInput,
  NewsletterButton,
  NewsletterForm,
  LogoSurface,
} from "./footer.styles";

export const FooterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <Footer>
      <FooterContainer>
        <NewsletterSection>
          <NewsletterContent>
            <NewsletterIntro>
              <NewsletterIconWrapper>
                <CoffeeCupIcon size={58} />
              </NewsletterIconWrapper>

              <NewsletterText>
                <NewsletterEyebrow>Stay connected</NewsletterEyebrow>

                <NewsletterDescription>
                  Get exclusive offers, new arrivals,
                  <br />
                  and stories from our family to yours.
                </NewsletterDescription>
              </NewsletterText>
            </NewsletterIntro>

            <NewsletterForm onSubmit={handleSubmit}>
              <NewsletterInput
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                required
              />

              <NewsletterButton type="submit">Subscribe</NewsletterButton>
            </NewsletterForm>
          </NewsletterContent>
        </NewsletterSection>

        <FooterContent>
          <BrandSection>
            <LogoSurface>
              <FooterLogo src={logoGreen} alt="Café Marbella" />
            </LogoSurface>

            <BrandDescription>
              Premium Venezuelan coffee, roasted with purpose and shared with
              the world.
            </BrandDescription>

            <SocialLinks aria-label="Social media links">
              <SocialLink
                href="https://www.instagram.com/cafemarbellaus_"
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
          </BrandSection>

          <FooterNavigation>
            {footerNavigation.map((group) => (
              <FooterNavigationColumn key={group.id}>
                <FooterHeading>{group.title}</FooterHeading>

                <FooterLinksList>
                  {group.links.map((item) => (
                    <li key={item.id}>
                      <FooterLink href={item.href}>{item.label}</FooterLink>
                    </li>
                  ))}
                </FooterLinksList>
              </FooterNavigationColumn>
            ))}

            <FooterNavigationColumn>
              <FooterHeading>Contact</FooterHeading>

              <ContactList>
                {contactItems.map((item) => (
                  <ContactItem key={item.id}>
                    <ContactLink
                      href={item.href}
                      target={item.id === "location" ? "_blank" : undefined}
                      rel={item.id === "location" ? "noreferrer" : undefined}
                    >
                      {item.label}
                    </ContactLink>
                  </ContactItem>
                ))}
              </ContactList>
              <PaymentMethods>
                <PaymentTitle>Secure payments</PaymentTitle>

                <PaymentIcons>
                  <VisaLogo src={visaLogo} alt="Visa" />

                  <MastercardLogo src={masterLogo} alt="Mastercard" />
                </PaymentIcons>
              </PaymentMethods>
            </FooterNavigationColumn>
          </FooterNavigation>
        </FooterContent>

        <BottomBar>
          <BottomBarContent>
            <span>
              © {new Date().getFullYear()} Café Marbella. All rights reserved.
            </span>

            <VenezuelaSignature>
              With a touch of Venezuela <span>♥</span> 🇻🇪
            </VenezuelaSignature>
          </BottomBarContent>
        </BottomBar>
      </FooterContainer>
    </Footer>
  );
};

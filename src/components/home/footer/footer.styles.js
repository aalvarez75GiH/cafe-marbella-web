import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;

  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme }) => theme.colors.bg.footer};
`;

export const FooterContainer = styled.div`
  width: calc(100% - 96px);
  max-width: 1500px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: calc(100% - 64px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 48px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(100% - 32px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: calc(100% - 24px);
  }
`;
// export const FooterContainer = styled.div`
//   width: calc(100% - 48px);
//   max-width: 1440px;
//   margin: 0 auto;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     width: calc(100% - 32px);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
//     width: calc(100% - 24px);
//   }
// `;

export const NewsletterIntro = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: flex-start;
    gap: 18px;
  }
`;
// export const NewsletterIntro = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 24px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     align-items: flex-start;
//     gap: 18px;
//   }
// `;

export const NewsletterIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;

  color: ${({ theme }) => theme.colors.brand.secondary};

  svg {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    svg {
      width: 46px;
      height: 46px;
    }
  }
`;
export const NewsletterSection = styled.div`
  padding: 34px 0 30px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.16);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 38px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 34px 0;
  }
`;
// export const NewsletterSection = styled.div`
//   padding: 56px 0 48px;

//   border-bottom: 1px solid rgba(255, 255, 255, 0.16);

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     padding: 48px 0 42px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     padding: 40px 0 36px;
//   }
// `;

export const NewsletterContent = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 0.8fr) minmax(480px, 1.2fr);
  align-items: center;
  gap: clamp(48px, 8vw, 140px);

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: minmax(280px, 0.85fr) minmax(400px, 1.15fr);
    gap: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;
// export const NewsletterContent = styled.div`
//   display: grid;
//   grid-template-columns: minmax(300px, 0.8fr) minmax(420px, 1.2fr);
//   align-items: center;
//   gap: 64px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
//     grid-template-columns: minmax(280px, 0.85fr) minmax(360px, 1.15fr);
//     gap: 40px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     grid-template-columns: 1fr;
//     gap: 28px;
//   }
// `;
// export const NewsletterContent = styled.div`
//   display: grid;
//   grid-template-columns: minmax(280px, 0.9fr) minmax(420px, 1.1fr);
//   align-items: center;
//   gap: 64px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
//     grid-template-columns: minmax(260px, 0.85fr) minmax(360px, 1.15fr);
//     gap: 40px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     grid-template-columns: 1fr;
//     gap: 28px;
//   }
// `;

export const NewsletterText = styled.div`
  max-width: 520px;
`;

export const NewsletterEyebrow = styled.p`
  margin: 0 0 8px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;
// export const NewsletterEyebrow = styled.p`
//   margin: 0 0 10px;

//   color: ${({ theme }) => theme.colors.brand.secondary};

//   font-family: ${({ theme }) => theme.fonts.heading};
//   font-size: 0.75rem;
//   font-weight: 700;
//   line-height: 1;
//   letter-spacing: 0.16em;
//   text-transform: uppercase;
// `;

export const NewsletterTitle = styled.h2`
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.6rem, 2.4vw, 2.4rem);
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.035em;
`;

export const NewsletterDescription = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.76);

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  line-height: 1.55;
`;
// export const NewsletterDescription = styled.p`
//   max-width: 480px;
//   margin: 14px 0 0;

//   color: rgba(255, 255, 255, 0.72);

//   font-family: ${({ theme }) => theme.fonts.body};
//   font-size: 0.95rem;
//   line-height: 1.7;
// `;

export const NewsletterForm = styled.form`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 150px;

  width: 100%;
  min-height: 56px;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.bg.primary};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 10px;

    overflow: visible;

    background: transparent;
  }
`;
// export const NewsletterForm = styled.form`
//   display: grid;
//   grid-template-columns: minmax(0, 1fr) auto;

//   min-height: 56px;

//   overflow: hidden;

//   background: ${({ theme }) => theme.colors.bg.primary};
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   border-radius: 4px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     grid-template-columns: 1fr;
//     gap: 10px;

//     overflow: visible;

//     background: transparent;
//     border: 0;
//   }
// `;

export const NewsletterInput = styled.input`
  width: 100%;
  min-width: 0;
  padding: 0 22px;

  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.bg.primary};
  border: 0;
  outline: none;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.brand.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 54px;
    border-radius: 5px;
  }
`;
// export const NewsletterInput = styled.input`
//   width: 100%;
//   min-width: 0;
//   padding: 0 22px;

//   color: ${({ theme }) => theme.colors.text.primary};
//   background: ${({ theme }) => theme.colors.bg.primary};
//   border: 0;
//   outline: none;

//   font-family: ${({ theme }) => theme.fonts.body};
//   font-size: 0.9rem;

//   &::placeholder {
//     color: ${({ theme }) => theme.colors.text.secondary};
//   }

//   &:focus-visible {
//     box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.brand.secondary};
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     min-height: 54px;
//     border-radius: 4px;
//   }
// `;

export const NewsletterButton = styled.button`
  min-width: 150px;
  padding: 0 24px;

  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme }) => theme.colors.brand.secondary};
  border: 0;

  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  transition: background-color 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.primaryDark};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.text.inverse};
    outline-offset: -4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 52px;
    border-radius: 5px;
  }
`;
// export const NewsletterButton = styled.button`
//   min-width: 156px;
//   padding: 0 28px;

//   color: ${({ theme }) => theme.colors.text.inverse};
//   background: ${({ theme }) => theme.colors.brand.secondary};
//   border: 0;

//   cursor: pointer;

//   font-family: ${({ theme }) => theme.fonts.heading};
//   font-size: 0.76rem;
//   font-weight: 700;
//   letter-spacing: 0.12em;
//   text-transform: uppercase;

//   transition: background-color 180ms ease, transform 180ms ease;

//   &:hover {
//     background: ${({ theme }) => theme.colors.brand.primary};
//   }

//   &:focus-visible {
//     outline: 2px solid ${({ theme }) => theme.colors.text.inverse};
//     outline-offset: -4px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     min-height: 52px;
//     border-radius: 4px;
//   }
// `;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: minmax(230px, 0.9fr) minmax(0, 3.1fr);
  align-items: start;
  gap: clamp(64px, 8vw, 140px);

  padding: 48px 0 46px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 48px;

    padding: 46px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 42px;

    padding: 40px 0;
  }
`;
// export const FooterContent = styled.div`
//   display: grid;
//   grid-template-columns: minmax(220px, 0.85fr) minmax(0, 2.15fr);
//   gap: 72px;

//   padding: 58px 0 54px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
//     gap: 48px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     grid-template-columns: 1fr;
//     gap: 48px;

//     padding: 48px 0;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     gap: 42px;

//     padding: 42px 0;
//   }
// `;

export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterLogo = styled.img`
  display: block;

  width: 190px;
  height: auto;

  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 176px;
  }
`;
// export const FooterLogo = styled.img`
//   display: block;

//   width: 390px;
//   height: auto;

//   object-fit: contain;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     width: 176px;
//   }
// `;

export const BrandDescription = styled.p`
  max-width: 280px;
  margin: 20px 0 0;

  color: rgba(255, 255, 255, 0.7);

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  line-height: 1.7;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-top: 24px;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  color: ${({ theme }) => theme.colors.text.inverse};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;

  transition: color 180ms ease, background-color 180ms ease,
    border-color 180ms ease, transform 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.bg.footer};
    background: ${({ theme }) => theme.colors.brand.secondary};
    border-color: ${({ theme }) => theme.colors.brand.secondary};
    transform: translateY(-2px);
  }
`;

export const FooterNavigation = styled.div`
  display: grid;
  grid-template-columns:
    minmax(120px, 1fr)
    minmax(120px, 1fr)
    minmax(145px, 1fr)
    minmax(190px, 1.2fr);
  gap: clamp(34px, 5vw, 84px);

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(4, minmax(120px, 1fr));
    gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: 1fr;
  }
`;
// export const FooterNavigation = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, minmax(120px, 1fr));
//   gap: 36px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
//     gap: 24px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//     row-gap: 42px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     grid-template-columns: 1fr 1fr;
//     gap: 38px 24px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
//     grid-template-columns: 1fr;
//   }
// `;

export const FooterNavigationColumn = styled.div`
  min-width: 0;
`;

export const FooterHeading = styled.h3`
  margin: 0 0 18px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.13em;
  text-transform: uppercase;
`;

export const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const FooterLink = styled.a`
  display: inline-block;

  color: rgba(255, 255, 255, 0.74);

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.86rem;
  line-height: 1.4;
  text-decoration: none;

  transition: color 180ms ease, transform 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.inverse};
    transform: translateX(3px);
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const ContactItem = styled.li``;

export const ContactLink = styled.a`
  color: rgba(255, 255, 255, 0.74);

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.86rem;
  line-height: 1.5;
  text-decoration: none;

  transition: color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;

export const PaymentMethods = styled.div`
  margin-top: 26px;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
`;

export const PaymentTitle = styled.p`
  margin: 0 0 10px;

  color: rgba(255, 255, 255, 0.54);

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const PaymentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 42px;
  min-height: 25px;
  padding: 3px 7px;

  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.bg.primary};
  border-radius: 3px;

  font-family: Arial, sans-serif;
  font-size: 0.63rem;
  font-weight: 700;
`;

export const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.14);
`;

export const BottomBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;

  padding: 20px 0 22px;

  color: rgba(255, 255, 255, 0.58);

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.76rem;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 9px;

    padding: 20px 0 24px;
  }
`;

export const VenezuelaSignature = styled.span`
  color: rgba(255, 255, 255, 0.72);

  span {
    color: #d83232;
  }
`;

export const LogoSurface = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 16px;

  background: ${({ theme }) => theme.colors.brand.cream};
  border-radius: 4px;
`;

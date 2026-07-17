import styled from "styled-components";
export const Slide = styled.article`
  position: relative;

  width: 100%;

  display: grid;
  grid-template-columns:
    minmax(300px, 0.82fr)
    minmax(320px, 0.88fr)
    minmax(0, 1.55fr);

  align-items: stretch;

  min-height: 680px;

  border-radius: 24px;

  background: ${({ theme }) => theme.colors.bg.secondary};

  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.wide}) {
    grid-template-columns:
      minmax(280px, 0.8fr)
      minmax(300px, 0.85fr)
      minmax(0, 1.4fr);

    column-gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns:
      minmax(270px, 0.78fr)
      minmax(290px, 0.82fr)
      minmax(0, 1.35fr);

    column-gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 0.78fr 0.82fr 1.25fr;
    min-height: 590px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const IntroColumn = styled.div`
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;

  min-width: 0;
  padding: 58px 28px 58px 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.wide}) {
    padding: 50px 24px 50px 56px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 50px 24px 50px 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 44px 24px 44px 58px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 48px 32px;

    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Eyebrow = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.secondary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.78rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

export const IntroDecoration = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin: 22px 0 36px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  span {
    width: 54px;
    height: 1px;

    background: currentColor;
  }

  i {
    width: 7px;
    height: 7px;

    border: 1px solid currentColor;

    transform: rotate(45deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;
export const IntroTitle = styled.h2`
  width: 100%;
  max-width: 360px;
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.6rem, 2.1vw, 2.4rem);
  font-weight: 500;

  letter-spacing: -0.025em;
  line-height: 0.95;

  span,
  em {
    display: block;
  }

  em {
    font-weight: inherit;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: clamp(1.8rem, 2.4vw, 2.6rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 520px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const IntroDescription = styled.p`
  max-width: 320px;
  margin: 24px 0 0;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  line-height: 1.65;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  margin-top: 42px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(100%, 520px);
    margin-right: auto;
    margin-left: auto;

    text-align: left;
  }
`;

export const Benefit = styled.div`
  display: grid;
  grid-template-columns: 54px 1fr;
  align-items: center;
  gap: 16px;
`;

export const BenefitIcon = styled.div`
  display: grid;
  place-items: center;

  width: 58px;
  height: 58px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.45);
  color: ${({ theme }) => theme.colors.brand.secondary};

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const BenefitContent = styled.div`
  min-width: 0;
`;

export const BenefitTitle = styled.p`
  margin: 0 0 5px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.72rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const BenefitDescription = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;

  line-height: 1.45;
`;
export const BundleColumn = styled.div`
  position: relative;
  z-index: 4;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  min-width: 0;

  padding: 130px 24px 62px 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 110px 18px 52px 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 90px 14px 44px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 46px 32px;

    text-align: center;
  }
`;

export const SlideCounter = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 0 0 26px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.78rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  letter-spacing: 0.12em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const BundleName = styled.h3`
  display: flex;
  align-items: flex-start;

  width: 100%;
  max-width: 350px;
  height: 3em;

  margin: 0;

  overflow: hidden;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.35rem, 3.25vw, 3.7rem);
  font-weight: 500;

  letter-spacing: -0.025em;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 320px;
    height: 3em;

    font-size: clamp(2.1rem, 3vw, 3.2rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;

    max-width: 100%;
    height: auto;
  }
`;
// export const BundleName = styled.h3`
//   display: flex;
//   align-items: flex-start;

//   width: 100%;
//   max-width: 330px;
//   min-height: 3em;

//   margin: 0;

//   color: ${({ theme }) => theme.colors.brand.primaryDark};

//   font-family: ${({ theme }) => theme.fonts.display};
//   font-size: clamp(2.35rem, 3.25vw, 3.7rem);
//   font-weight: 500;

//   letter-spacing: -0.025em;
//   line-height: 1;

//   @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
//     max-width: 300px;
//     min-height: 3em;

//     font-size: clamp(2.1rem, 3vw, 3.2rem);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     justify-content: center;

//     max-width: 100%;
//     min-height: auto;
//   }
// `;

export const TitleDecoration = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  min-height: 8px;
  margin: 20px 0 24px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  span {
    width: 58px;
    height: 1px;

    background: currentColor;
  }

  i {
    width: 6px;
    height: 6px;

    border: 1px solid currentColor;

    transform: rotate(45deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const BundleDescription = styled.p`
  display: flex;
  align-items: flex-start;

  max-width: 290px;
  min-height: 3.1em;

  margin: 0;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 440px;
    min-height: auto;

    margin-right: auto;
    margin-left: auto;
  }
`;

export const Price = styled.p`
  margin: 30px 0 18px;
  margin-top: 28px;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.9rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  line-height: 1;
`;
export const SlideImageArea = styled.div`
  position: relative;

  min-width: 0;
  min-height: 680px;

  background: #efe4cf;

  overflow: hidden;

  &::after {
    content: "";

    position: absolute;
    inset: 0 auto 0 0;
    z-index: 2;

    width: 35px;

    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.bg.secondary} 0%,
      rgba(248, 246, 241, 0.35) 45%,
      rgba(248, 246, 241, 0) 100%
    );

    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 620px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 590px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 500px;

    &::after {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 370px;
  }
`;

export const SceneImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;

  object-position: ${({ $objectPosition }) =>
    $objectPosition || "center center"};

  transition: object-position 500ms ease, transform 500ms ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    inset: 0;

    object-position: center;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 28px;
  left: 24px;

  z-index: 5;

  padding: 10px 18px;

  border-radius: 999px;

  background: ${({ theme }) => theme.colors.brand.secondary};
  color: ${({ theme }) => theme.colors.text.inverse};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.7rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  letter-spacing: 0.12em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 18px;
    left: 18px;
  }
`;
const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 20;

  display: grid;
  place-items: center;

  width: 46px;
  height: 46px;
  padding: 0;

  border: 1px solid ${({ theme }) => theme.colors.brand.primary};
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.bg.primary};
  color: ${({ theme }) => theme.colors.brand.primary};

  box-shadow: 0 8px 24px rgba(20, 92, 52, 0.1);

  cursor: pointer;

  transform: translateY(-50%);

  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 4px;
  }
`;

export const PreviousButton = styled(NavigationButton)`
  left: -30px;
`;

export const NextButton = styled(NavigationButton)`
  right: -30px;
`;

export const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Arial, sans-serif;
  font-size: 1.75rem;
  font-weight: 300;

  line-height: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

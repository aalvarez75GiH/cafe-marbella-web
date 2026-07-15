import { useEffect, useState } from "react";

import { Text } from "../../infrastructure/typography/text.component";
import MarbellaLogo from "../../assets/logos/Logo.png";
import { AccountIcon } from "../../assets/icons/ui/account.icon";
import { CartIcon } from "../../assets/icons/ui/cart.icon";
import {
  HeaderWrapper,
  HeaderContent,
  LogoLink,
  LogoImage,
  DesktopNavigation,
  NavigationLink,
  NavigationButton,
  NavigationArrow,
  ActionsContainer,
  IconButton,
  CartButton,
  CartBadge,
  MobileMenuButton,
  MobileNavigation,
  MobileNavigationHeader,
  MobileNavigationContent,
  MobileNavigationLink,
  MobileBackdrop,
  TemporaryLogo,
} from "./main.header.styles";

const navigationItems = [
  {
    label: "Coffee",
    href: "#coffee",
    hasDropdown: true,
  },
  {
    label: "Bundles",
    href: "#bundles",
  },
  {
    label: "Merchandise",
    href: "#merchandise",
  },
  {
    label: "Our Story",
    href: "#our-story",
  },
  {
    label: "Foundation",
    href: "#foundation",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const MenuIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
};

export const Main_Header = ({ cartQuantity = 0, onAccount, onCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <MobileMenuButton
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MenuIcon />
          </MobileMenuButton>

          <LogoLink href="#home" aria-label="Café Marbella home">
            <TemporaryLogo>
              <LogoImage src={MarbellaLogo} alt="Café Especial Marbella" />
            </TemporaryLogo>
          </LogoLink>

          <DesktopNavigation aria-label="Main navigation">
            {navigationItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <NavigationButton key={item.label} type="button">
                    <Text as="span" $variant="nav">
                      {item.label}
                    </Text>

                    <NavigationArrow aria-hidden="true">
                      <path d="m4 6 4 4 4-4" />
                    </NavigationArrow>
                  </NavigationButton>
                );
              }

              return (
                <NavigationLink key={item.label} href={item.href}>
                  <Text as="span" $variant="nav">
                    {item.label}
                  </Text>
                </NavigationLink>
              );
            })}
          </DesktopNavigation>

          <ActionsContainer>
            <IconButton
              type="button"
              aria-label="My account"
              onClick={onAccount}
            >
              <AccountIcon />
            </IconButton>

            <CartButton
              type="button"
              aria-label={`Shopping cart with ${cartQuantity} items`}
              onClick={onCart}
            >
              <CartIcon />

              <CartBadge>{cartQuantity > 99 ? "99+" : cartQuantity}</CartBadge>
            </CartButton>
          </ActionsContainer>
        </HeaderContent>
      </HeaderWrapper>

      <MobileBackdrop
        $isOpen={isMobileMenuOpen}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <MobileNavigation
        $isOpen={isMobileMenuOpen}
        aria-hidden={!isMobileMenuOpen}
      >
        <MobileNavigationHeader>
          {/* <LogoLink href="#home" onClick={closeMobileMenu}>
            <LogoImage src={MarbellaLogo} alt="Café Especial Marbella" />
          </LogoLink> */}

          <IconButton
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
          >
            <CloseIcon />
          </IconButton>
        </MobileNavigationHeader>

        <MobileNavigationContent>
          {navigationItems.map((item) => (
            <MobileNavigationLink
              key={item.label}
              href={item.href}
              onClick={closeMobileMenu}
            >
              <Text as="span" $variant="nav">
                {item.label}
              </Text>

              <span aria-hidden="true">→</span>
            </MobileNavigationLink>
          ))}
        </MobileNavigationContent>
      </MobileNavigation>
    </>
  );
};

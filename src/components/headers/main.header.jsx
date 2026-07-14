import { useEffect, useState } from "react";

import { Text } from "../../infrastructure/typography/text.component";
import MarbellaLogo from "../../assets/logos/Logo.png";

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
  //   TemporaryLogoTop,
  //   TemporaryLogoName,
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

const SearchIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
};

const AccountIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5.5 20c.5-4 2.8-6 6.5-6s6 2 6.5 6" />
    </svg>
  );
};

const CartIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20 8H6" />
      <circle cx="9.5" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </svg>
  );
};

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

export const Main_Header = ({
  cartQuantity = 0,
  onSearch,
  onAccount,
  onCart,
}) => {
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
            <IconButton type="button" aria-label="Search" onClick={onSearch}>
              <SearchIcon />
            </IconButton>

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

import { createContext } from "react";

export const NavigationTransitionContext = createContext({
  isNavigating: false,
  navigateWithTransition: () => {},
});

import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RouteTransitionOverlay,
  RouteTransitionContent,
  RouteTransitionMark,
  RouteTransitionSpinner,
  RouteTransitionText,
} from "./navigation_transition.styles";

import { NavigationTransitionContext } from "./navigation_transition.context";

const MINIMUM_TRANSITION_TIME = 2020;

export const NavigationTransitionProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isNavigating, setIsNavigating] = useState(false);

  const navigateWithTransition = useCallback(
    (destination) => {
      if (!destination || isNavigating) {
        return;
      }

      setIsNavigating(true);

      window.setTimeout(() => {
        navigate(destination);

        window.requestAnimationFrame(() => {
          window.setTimeout(() => {
            setIsNavigating(false);
          }, 140);
        });
      }, MINIMUM_TRANSITION_TIME);
    },
    [isNavigating, navigate]
  );

  const contextValue = useMemo(
    () => ({
      isNavigating,
      navigateWithTransition,
    }),
    [isNavigating, navigateWithTransition]
  );

  return (
    <NavigationTransitionContext.Provider value={contextValue}>
      {children}

      {isNavigating && (
        <RouteTransitionOverlay
          role="status"
          aria-live="polite"
          aria-label="Loading the selected page"
        >
          <RouteTransitionContent>
            <RouteTransitionMark aria-hidden="true">
              <RouteTransitionSpinner />
            </RouteTransitionMark>

            <RouteTransitionText>
              Preparing your Cafe Marbella experience
            </RouteTransitionText>
          </RouteTransitionContent>
        </RouteTransitionOverlay>
      )}
    </NavigationTransitionContext.Provider>
  );
};

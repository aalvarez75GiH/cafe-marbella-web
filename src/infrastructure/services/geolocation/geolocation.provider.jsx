import { useCallback, useEffect, useMemo, useState } from "react";

import { getCurrentDeviceLocation } from "./geolocation.helpers";

import { GeolocationContext } from "./geolocation.context";

export const Geolocation_Context_Provider = ({ children }) => {
  const [deviceLat, setDeviceLat] = useState(null);
  const [deviceLng, setDeviceLng] = useState(null);

  const [isLocationLoading, setIsLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState(null);
  const [locationStatus, setLocationStatus] = useState("requesting");

  const handleLocationSuccess = useCallback((position) => {
    setDeviceLat(position.coords.latitude);
    setDeviceLng(position.coords.longitude);
    setLocationStatus("granted");
    setLocationError(null);
    setIsLocationLoading(false);
  }, []);

  const handleLocationError = useCallback((error) => {
    console.log("Geolocation error code:", error.code);
    console.log("Geolocation message:", error.message);

    let message = "Could not determine your location.";
    let status = "unavailable";

    if (error.code === error.PERMISSION_DENIED) {
      message = "Location permission was denied.";
      status = "denied";
    } else if (error.code === error.POSITION_UNAVAILABLE) {
      message = "Your current location is unavailable.";
    } else if (error.code === error.TIMEOUT) {
      message = "The location request timed out.";
    }

    setLocationError(message);
    setLocationStatus(status);
    setIsLocationLoading(false);
  }, []);

  useEffect(() => {
    getCurrentDeviceLocation({
      onSuccess: (position) => {
        setDeviceLat(position.coords.latitude);
        setDeviceLng(position.coords.longitude);
        setLocationError(null);
        setLocationStatus("granted");
        setIsLocationLoading(false);
      },

      onError: (error) => {
        console.log("Geolocation error code:", error.code);
        console.log("Geolocation message:", error.message);

        let message = "Could not determine your location.";
        let status = "unavailable";

        if (error.code === error.PERMISSION_DENIED) {
          message = "Location permission was denied.";
          status = "denied";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          message = "Your current location is unavailable.";
        } else if (error.code === error.TIMEOUT) {
          message = "The location request timed out.";
        } else if (error.code === 0) {
          message = error.message;
        }

        setLocationError(message);
        setLocationStatus(status);
        setIsLocationLoading(false);
      },
    });
  }, []);

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      handleLocationError({
        code: 0,
        message: "Geolocation is not supported by this browser.",
      });

      return;
    }

    navigator.geolocation.getCurrentPosition(
      handleLocationSuccess,
      handleLocationError,
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, [handleLocationError, handleLocationSuccess]);

  const requestDeviceLocation = useCallback(() => {
    setIsLocationLoading(true);
    setLocationError(null);
    setLocationStatus("requesting");

    getCurrentLocation();
  }, [getCurrentLocation]);

  const value = useMemo(
    () => ({
      deviceLat,
      deviceLng,
      isLocationLoading,
      locationError,
      locationStatus,
      requestDeviceLocation,
    }),
    [
      deviceLat,
      deviceLng,
      isLocationLoading,
      locationError,
      locationStatus,
      requestDeviceLocation,
    ]
  );

  return (
    <GeolocationContext.Provider value={value}>
      {children}
    </GeolocationContext.Provider>
  );
};

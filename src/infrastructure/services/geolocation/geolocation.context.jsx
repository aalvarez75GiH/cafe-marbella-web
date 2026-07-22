import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const GeolocationContext = createContext(null);

export const Geolocation_Context_Provider = ({ children }) => {
  const [deviceLat, setDeviceLat] = useState(null);
  const [deviceLng, setDeviceLng] = useState(null);

  const [isLocationLoading, setIsLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState(null);
  const [locationStatus, setLocationStatus] = useState("idle");

  const requestDeviceLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationStatus("unavailable");
      setLocationError("Geolocation is not supported by this browser.");
      setIsLocationLoading(false);

      return;
    }

    setIsLocationLoading(true);
    setLocationError(null);
    setLocationStatus("requesting");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setDeviceLat(position.coords.latitude);
        setDeviceLng(position.coords.longitude);

        setLocationStatus("granted");
        setIsLocationLoading(false);
      },
      (error) => {
        console.log("Geolocation error code:", error.code);
        console.log("Geolocation message:", error.message);
        let message = "Could not determine your location.";
        let status = "unavailable";

        if (error.code === error.PERMISSION_DENIED) {
          message = "Location permission was denied.";
          status = "denied";
        }

        if (error.code === error.POSITION_UNAVAILABLE) {
          message = "Your current location is unavailable.";
        }

        if (error.code === error.TIMEOUT) {
          message = "The location request timed out.";
        }
        setLocationError(message);
        setLocationStatus(status);
        setIsLocationLoading(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, []);

  useEffect(() => {
    requestDeviceLocation();
  }, [requestDeviceLocation]);

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

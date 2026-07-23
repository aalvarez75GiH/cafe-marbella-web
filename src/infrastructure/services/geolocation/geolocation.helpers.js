const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: false,
  timeout: 10000,
  maximumAge: 300000,
};

export const getCurrentDeviceLocation = ({ onSuccess, onError }) => {
  if (!navigator.geolocation) {
    onError({
      code: 0,
      message: "Geolocation is not supported by this browser.",
    });

    return;
  }

  navigator.geolocation.getCurrentPosition(
    onSuccess,
    onError,
    GEOLOCATION_OPTIONS
  );
};

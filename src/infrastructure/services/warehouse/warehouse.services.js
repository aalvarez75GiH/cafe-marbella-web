import axios from "axios";

import { environment } from "../../config/environment";

export const gettingClosestWarehouseForDeviceRequest = async (lat, lng) => {
  const { warehouseEndPoint } = environment;

  if (!warehouseEndPoint) {
    throw new Error("Warehouse endpoint is not configured.");
  }

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    throw new Error("Valid latitude and longitude are required.");
  }

  try {
    const response = await axios.get(`${warehouseEndPoint}/closestWH`, {
      params: {
        lat,
        lng,
      },
      timeout: 15000,
    });

    return response.data?.closest ?? null;
  } catch (error) {
    console.error(
      "Error fetching closest warehouse:",
      error.response?.data || error.message
    );

    throw error;
  }
};

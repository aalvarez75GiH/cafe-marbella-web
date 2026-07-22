import axios from "axios";

import { environment } from "../../config/environment";

export const gettingAllProductsCatalogRequest = async () => {
  const { productsEndPoint } = environment;

  if (!productsEndPoint) {
    throw new Error("Products endpoint is not configured.");
  }

  try {
    const response = await axios.get(`${productsEndPoint}/products`, {
      timeout: 15000,
    });

    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error(
      "Error fetching products catalog:",
      error.response?.data || error.message
    );

    throw error;
  }
};

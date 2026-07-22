import { getDownloadURL, ref } from "firebase/storage";

import { storage } from "../../firebase/fb";

export const getImageUrlFromPath = async (path) => {
  if (!path) {
    return null;
  }

  try {
    const imageRef = ref(storage, path);

    return await getDownloadURL(imageRef);
  } catch (error) {
    console.warn(`Firebase image not found: ${path}`);
    return null;
  }
};

export const getImageUrlsFromPaths = async (paths = []) => {
  if (!Array.isArray(paths) || paths.length === 0) {
    return [];
  }

  const urls = await Promise.all(
    paths.map((path) => getImageUrlFromPath(path))
  );

  return urls.filter(Boolean);
};

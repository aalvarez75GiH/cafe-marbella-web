import venezuelaGroundFront from "../../assets/images/products_images/venezuela/vzla_bag_gb.png";
import venezuelaGroundRotated from "../../assets/images/products_images/venezuela/vzla_bag_gb_rotated.png";

import venezuelaWholeFront from "../../assets/images/products_images/venezuela/vzla_bag_wb.png";
import venezuelaWholeRotated from "../../assets/images/products_images/venezuela/vzla_bag_wb_rotated.png";

import mexicoGroundFront from "../../assets/images/products_images/mexico/mex_bag_gb_front.png";
import mexicoGroundRotated from "../../assets/images/products_images/mexico/mex_bag_gb_rotated.png";

import mexicoWholeFront from "../../assets/images/products_images/mexico/mex_bag_wb_front.png";
import mexicoWholeRotated from "../../assets/images/products_images/mexico/mex_bag_wb_rotated.png";

import venezuelaFlag from "../../assets/images/flags_images/flag_venezuela.svg";
import mexicoFlag from "../../assets/images/flags_images/flag_mexico.svg";

export const productImageMap = {
  "vzla-ground": {
    front: venezuelaGroundFront,
    rotated: venezuelaGroundRotated,
  },

  "vzla-whole": {
    front: venezuelaWholeFront,
    rotated: venezuelaWholeRotated,
  },

  "mex-ground": {
    front: mexicoGroundFront,
    rotated: mexicoGroundRotated,
  },

  "mex-whole": {
    front: mexicoWholeFront,
    rotated: mexicoWholeRotated,
  },
};

export const flagImageMap = {
  vzla: venezuelaFlag,
  mex: mexicoFlag,
};

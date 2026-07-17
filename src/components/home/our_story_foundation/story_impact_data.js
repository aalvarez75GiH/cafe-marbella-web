import ourStoryImage from "../../../assets/images/origin/our_history.png";
import foundationImage from "../../../assets/images/origin/foundation.png";

export const storyImpactItems = [
  {
    id: "our_story",
    eyebrow: "Our Origin",
    title: "From the Venezuelan mountains to your cup",
    description:
      "We are a family with over fifty years dedicated to coffee cultivation, a tradition that has been passed down from generation to generation, uniting our love for the land and honest work.",
    buttonLabel: "Our Story",
    path: "/our-story",
    image: ourStoryImage,
    imageAlt:
      "Venezuelan coffee farmer presenting freshly harvested coffee cherries",
    buttonVariant: "primary",
    imagePosition: "center center",
  },
  {
    id: "our_foundation",
    eyebrow: "Our Foundation",
    title: "Brewing change. Building futures.",
    description:
      "Through the Café Marbella Foundation, qualifying bundle purchases help support educational and community programs in Venezuela. We love our country and we'll stand for it",
    buttonLabel: "Learn About Our Impact",
    path: "/foundation",
    image: foundationImage,
    imageAlt:
      "Children supported by the Café Marbella Foundation community programs",
    buttonVariant: "secondary",
    imagePosition: "center center",
  },
];

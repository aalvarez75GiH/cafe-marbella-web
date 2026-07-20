import {
  Card,
  CardBackground,
  CardContent,
  CardDescription,
  CardOverlay,
  CardTitle,
  ContentGroup,
  ArrowButton,
  ArrowIcon,
} from "./shop_category_card.styles";

export const ShopCategoryCard = ({ category }) => {
  const { title, description, image, path } = category;

  return (
    <Card to={path} aria-label={`Explore ${title}`}>
      <CardBackground $image={image} />

      <CardOverlay />

      <CardContent>
        <ContentGroup>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </ContentGroup>

        <ArrowButton as="span" aria-hidden="true">
          <ArrowIcon viewBox="0 0 24 24">
            <path d="M8.5 4.5L16 12L8.5 19.5" />
          </ArrowIcon>
        </ArrowButton>
      </CardContent>
    </Card>
  );
};
// import { useNavigate, Link } from "react-router-dom";

// import {
//   Card,
//   CardBackground,
//   CardContent,
//   CardDescription,
//   CardOverlay,
//   CardTitle,
//   ContentGroup,
//   ArrowButton,
//   ArrowIcon,
// } from "./shop_category_card.styles";

// export const ShopCategoryCard = ({ category }) => {
//   const navigate = useNavigate();
//   const { title, description, image } = category;

//   return (
//     <Link to={category.path}>
//       <Card
//         type="button"
//         aria-label={`Explore ${title}`}
//         //   onClick={() => navigate(category.path)}
//       >
//         <CardBackground $image={image} />

//         <CardOverlay />

//         <CardContent>
//           <ContentGroup>
//             <CardTitle>{title}</CardTitle>
//             <CardDescription>{description}</CardDescription>
//           </ContentGroup>

//           <ArrowButton aria-hidden="true">
//             <ArrowIcon viewBox="0 0 24 24">
//               <path d="M8.5 4.5L16 12L8.5 19.5" />
//             </ArrowIcon>
//           </ArrowButton>
//         </CardContent>
//       </Card>
//     </Link>
//   );
// };

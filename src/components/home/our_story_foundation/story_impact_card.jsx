// import { useNavigate } from "react-router-dom";

import { Button } from "../../ctas/button";

import {
  Card,
  ImageContainer,
  CardImage,
  CardContent,
  Eyebrow,
  CardTitle,
  CardDescription,
  ButtonWrapper,
  BotanicalDecoration,
} from "./story_impact_card.styles";

const BotanicalIcon = () => {
  return (
    <svg viewBox="0 0 240 360" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M194 354C182 285 164 227 132 172C104 124 69 83 24 45"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M104 130C76 116 53 92 42 63C69 69 94 90 104 130Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M136 180C151 148 177 126 207 118C201 151 176 174 136 180Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M159 229C129 218 105 195 93 166C124 172 149 194 159 229Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M180 284C194 251 217 229 238 222C235 254 216 278 180 284Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <circle cx="119" cy="155" r="6" stroke="currentColor" strokeWidth="1.2" />

      <circle cx="128" cy="164" r="5" stroke="currentColor" strokeWidth="1.2" />

      <circle
        cx="139"
        cy="153"
        r="5.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <circle cx="146" cy="166" r="6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
};

export const StoryImpactCard = ({ item }) => {
  //   const navigate = useNavigate();

  //   const handleNavigation = () => {
  //     navigate(item.path);
  //   };

  return (
    <Card>
      <ImageContainer>
        <CardImage
          src={item.image}
          alt={item.imageAlt}
          $imagePosition={item.imagePosition}
        />
      </ImageContainer>

      <CardContent>
        <BotanicalDecoration>
          <BotanicalIcon />
        </BotanicalDecoration>

        <Eyebrow>{item.eyebrow}</Eyebrow>

        {/* <Divider aria-hidden="true">
          <DividerLine />
          <DividerDiamond />
          <DividerLine />
        </Divider> */}

        <CardTitle>{item.title}</CardTitle>

        <CardDescription>{item.description}</CardDescription>

        <ButtonWrapper>
          <Button
            variant={item.buttonVariant}
            size="medium"
            width={item.id === "our_foundation" ? "270px" : "190px"}
            tabletWidth={item.id === "our_foundation" ? "270px" : "190px"}
            mobileWidth="100%"
            onClick={() => null}
          >
            {item.buttonLabel}
            <span aria-hidden="true">→</span>
          </Button>
        </ButtonWrapper>
      </CardContent>
    </Card>
  );
};

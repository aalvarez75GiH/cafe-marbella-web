import { useState } from "react";

import { testimonialItems } from "./testimonials_data";

import {
  CarouselContainer,
  QuoteIcon,
  TestimonialText,
  TestimonialFooter,
  CustomerName,
  StarsContainer,
  Star,
  NavigationContainer,
  NavigationButton,
  ArrowIcon,
} from "./testimonial_carousel.styles";

export const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const activeTestimonial = testimonialItems[currentTestimonial];

  const handlePrevious = () => {
    setCurrentTestimonial((previous) =>
      previous === 0 ? testimonialItems.length - 1 : previous - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((previous) =>
      previous === testimonialItems.length - 1 ? 0 : previous + 1
    );
  };

  return (
    <CarouselContainer>
      <QuoteIcon aria-hidden="true">“</QuoteIcon>

      <TestimonialText key={activeTestimonial.id}>
        {activeTestimonial.quote}
      </TestimonialText>

      <TestimonialFooter>
        <div>
          <CustomerName>{activeTestimonial.customerName}</CustomerName>

          <StarsContainer
            aria-label={`${activeTestimonial.rating} out of 5 stars`}
          >
            {Array.from({ length: activeTestimonial.rating }).map(
              (_, index) => (
                <Star key={index}>★</Star>
              )
            )}
          </StarsContainer>
        </div>

        <NavigationContainer>
          <NavigationButton
            type="button"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <ArrowIcon $previous aria-hidden="true">
              →
            </ArrowIcon>
          </NavigationButton>

          <NavigationButton
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ArrowIcon aria-hidden="true">→</ArrowIcon>
          </NavigationButton>
        </NavigationContainer>
      </TestimonialFooter>
    </CarouselContainer>
  );
};

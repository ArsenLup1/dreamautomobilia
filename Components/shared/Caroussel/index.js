import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import CarouselContainer from "./Carousel.stc";
//import { Row } from 'react-bootstrap';

const items = [
  {
    src: '/img/Banner003.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
    width: "1100rem",
    height: "90rem"
  },
  {
    src: '/img/Banner002.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    width: "1100rem",
    height: "90rem"
  },
  {
    src: '/img/Banner001.png',
    altText: '',
    caption: '',
    width: "1100rem",
    height: "90rem"
  },
  {
    src: '/img/Banner004.png',
    altText: 'Slide 4',
    caption: 'Slide 4',
    width: "1100rem",
    height: "90rem"
  },
  {
    src: '/img/Banner005.png',
    altText: 'Slide 5',
    caption: 'Slide 5',
    width: "1100rem",
    height: "90rem"
  },
  {
    src: '/img/Banner007.png',
    altText: 'Slide 6',
    caption: 'Slide 6',
    width: "1100rem",
    height: "90rem"
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        
      >
        <img src={item.src} alt={item.altText} width={item.width} height={items.height} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
      
    );
  });

  return (
    <CarouselContainer>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </CarouselContainer>
  );
}

export default Example;
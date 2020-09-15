import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import LambdaTwo from "./lambda-4-580539.png";

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const pics = [
    {
      id: 1,
      img: LambdaTwo,
      label: "label one",
    },
    {
      id: 2,
      img: LambdaTwo,
      label: "label two",
    },
    {
      id: 3,
      img: LambdaTwo,
      label: "label three",
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {pics.map((cat, index) => (
        <Carousel.Item key={cat.id}>
          <img
            className="d-block w-100"
            height="700 px"
            src={cat.img}
            alt={index}
          />
          <Carousel.Caption key={index}>
            <h3>{cat.label}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default Slideshow;

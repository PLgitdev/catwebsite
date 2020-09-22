import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import RS from "./assets/background1.png";
import RS2 from "./assets/background2.png";
import RS3 from "./assets/background3.png";

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const pics = [
    {
      id: 1,
      img: RS,
      label: "label one",
    },
    {
      id: 2,
      img: RS2,
      label: "label two",
    },
    {
      id: 3,
      img: RS3,
      label: "label three",
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {pics.map((cat, index) => (
        <Carousel.Item key={cat.id}>
          <img
            className="d-block w-100"
            height="900 px"
            src={cat.img}
            alt={index}
          />
          <Carousel.Caption key={index}></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default Slideshow;

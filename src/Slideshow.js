import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import Catone from "./catone.png";
import Cattwo from "./cattwo.jpg";
import Catthree from "./catthree.jpg";

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const cats = [
    {
      id: 1,
      img: Catone,
      label: "label one",
    },
    {
      id: 2,
      img: Cattwo,
      label: "label two",
    },
    {
      id: 3,
      img: Catthree,
      label: "label three",
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {cats.map((cat, index) => (
        <Carousel.Item key={cat.id}>
          <img
            className="d-block w-100"
            height="500px"
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

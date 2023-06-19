import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import slide01 from "..//..//assets/images/carousel/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-2.jpg";
import slide02 from "..//..//assets/images/carousel/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-3.jpg";
import slide03 from "..//..//assets/images/carousel/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-7.jpg";
import slide04 from "..//..//assets/images/carousel/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-11.jpg";
import slide05 from "..//..//assets/images/carousel/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-12.jpg";
import slide06 from "..//..//assets/images/carousel/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-13.jpg";

function CarouselImages() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={slide01}
          alt="Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={slide02}
          alt="Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={slide03}
          alt="Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={slide04}
          alt="Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={slide05}
          alt="Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={slide06}
          alt="Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImages;

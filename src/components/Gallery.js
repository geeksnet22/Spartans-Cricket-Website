import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";
import image4 from "../assets/4.jpeg";
import image5 from "../assets/5.jpeg";
import image6 from "../assets/6.jpeg";
import image7 from "../assets/7.jpeg";
import image8 from "../assets/8.jpeg";
import image9 from "../assets/9.jpeg";
import image10 from "../assets/10.jpeg";
import image11 from "../assets/11.jpeg";
import image12 from "../assets/12.jpeg";
import image13 from "../assets/13.jpeg";
import image14 from "../assets/14.jpeg";
import image15 from "../assets/15.jpeg";
import image16 from "../assets/16.jpeg";
import image17 from "../assets/17.jpeg";
import image18 from "../assets/18.jpeg";
import image19 from "../assets/19.jpeg";
import image20 from "../assets/20.jpeg";
import image21 from "../assets/21.jpeg";

function Gallery() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={image1} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image2} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image3} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image4} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image5} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image6} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image7} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image8} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image9} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image10} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image11} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image12} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image13} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image14} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image15} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image16} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image17} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image18} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image19} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image20} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={image21} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;

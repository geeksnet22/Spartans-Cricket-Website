import React, {useState} from "react";
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
import GalleryModal from "./GalleryModal"
import "../css/Gallery.css"

function Gallery() {

  const images = [image1, image2, image3, image4, image5, image6,
    image7, image7, image8, image9, image10, image11,
    image12, image13, image14, image15, image16, image17,
    image18, image19, image20, image21]

  const [currentModalImage, setCurrentModalImage] = useState(0);

  const openModal = (currentImage) => {
    setCurrentModalImage(currentImage)
    document.getElementById("galleryModal").style.display = "block";
  }

  return (
    <Container>
      <Row>
      <Col xs={6} md={4}>
          <Image src={images[0]} onClick={ () => openModal(0) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[1]} onClick={ () => openModal(1) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[2]} onClick={ () => openModal(2) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[3]} onClick={ () => openModal(3) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[4]} onClick={ () => openModal(4) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[5]} onClick={ () => openModal(5) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[6]} onClick={ () => openModal(6) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[7]} onClick={ () => openModal(7) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[8]} onClick={ () => openModal(8) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[9]} onClick={ () => openModal(9) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[10]} onClick={ () => openModal(10) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[11]} onClick={ () => openModal(11) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[12]} onClick={ () => openModal(12) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[13]} onClick={ () => openModal(13) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[14]} onClick={ () => openModal(14) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[15]} onClick={ () => openModal(15) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[16]} onClick={ () => openModal(16) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[17]} onClick={ () => openModal(17) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[18]} onClick={ () => openModal(18) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[19]} onClick={ () => openModal(19) } thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={images[20]} onClick={ () => openModal(20) } thumbnail />
        </Col>
      </Row>
      <GalleryModal currentSlide={currentModalImage} allSlides={images}/>
    </Container>
  );
}

export default Gallery;

import React from "react";
import ImageSlideShow from "../components/ImagesSlideShow";
import { Jumbotron, Container } from "react-bootstrap";
import mainBackground from "../assets/mainBackground.jpeg";

function Home() {
  return (
    <div>
      <Jumbotron
        fluid
        style={{
          marginBottom: 0,
          backgroundColor: "#0041C2",
          // backgroundImage: mainBackground,
          justifyContent: "center",
        }}
      >
        <Container
          style={{
            backgroundImage: mainBackground,
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontStyle: "oblique",
              fontSize: 50,
            }}
          >
            Welcome to Saskatoon Spartans Cricket Club
          </h1>
          <h2 style={{ color: "white" }}>Saskatoon T20 Champions 2020</h2>
        </Container>
      </Jumbotron>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        <ImageSlideShow />
      </div>
    </div>
  );
}

export default Home;

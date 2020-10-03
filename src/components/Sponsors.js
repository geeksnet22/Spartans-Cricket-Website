import React from "react";

function Sponsors() {
  return (
    <div
      style={{
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Our Sponsors
      </h1>
      <br />
      <ul
        style={{
          display: "flex",
          fontSize: "30px",
          justifyContent: "center",
        }}
      >
        <li style={{ margin: "0 60px" }}>Bombay Spices</li>
        <li style={{ margin: "0 60px" }}>Delhi Chaat</li>
        <li style={{ margin: "0 60px" }}>Mr. lube</li>
        <li style={{ margin: "0 60px" }}>Pizza Pirates</li>
      </ul>
    </div>
  );
}

export default Sponsors;

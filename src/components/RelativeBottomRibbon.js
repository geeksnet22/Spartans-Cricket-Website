import React from "react";
import Sponsors from "../components/Sponsors";

function BottomRibbon() {
  return (
    <div
      style={{
        height: "200px",
        backgroundColor: "#0041C2",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Sponsors />
    </div>
  );
}

export default BottomRibbon;

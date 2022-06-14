import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        height: "60px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        style={{ height: "60%", margin: "0 80px" }}
        alt="bastó logo"
        src="http://www.bastó.com.ar/images/BASTO-H-COLOR-1-nopadding-low.png"
      ></img>
    </div>
  );
};

export default Navbar;

import React from "react";

const Lip = ({ text }) => {
  let lipStyles = {
    width: "1300px",
    height: "100px",
    backgroundColor: "grey",
    position: "absolute",
    bottom: "0px",
    borderRadius: "20px 20px 0px 0px",
    backgroundColor: `rgb(188, 188, 188)`,
    animation: "lipAnimation 1s",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="lip" style={lipStyles}>
      <h1>{text}</h1>
    </div>
  );
};

export default Lip;

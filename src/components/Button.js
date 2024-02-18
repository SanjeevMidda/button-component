import { React, useState } from "react";

const Button = ({ color, text, lipText }) => {
  const [buttonColor, setButtonColor] = useState(true);

  let buttonStyles = {
    // backgroundColor: buttonColor ? color : "white",
    padding: "10px",
    borderRadius: "10px",
    color: buttonColor ? "white" : "blue",
    transform: buttonColor ? `translateY(0px)` : `translateY(20px)`,
    border: buttonColor ? "none" : `1px solid ${color}`,
    color: color,
  };

  return (
    <div
      className="button"
      style={buttonStyles}
      onClick={() => {
        setButtonColor(!buttonColor);
        lipText();
      }}
    >
      <h5>{text}</h5>
    </div>
  );
};

export default Button;

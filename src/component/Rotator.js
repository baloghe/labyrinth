import React from "react";
import "./Arrow.css";

export default function Rotator({caption, rotatorClicked}){
	
  const handleClick = () => {
  	rotatorClicked();
  }

	return (
  <div className="arrow arrow-pushable" onClick={handleClick}>
    {caption}
  </div>
  );  
}
import React from "react";
import "./Arrow.css";

export default function Rotator({caption, rotatorClicked, fontSize}){
	
  const handleClick = () => {
  	rotatorClicked();
  }

	return (
  <div className={`arrow arrow-pushable ${fontSize}`} onClick={handleClick}>
    {caption}
  </div>
  );  
}
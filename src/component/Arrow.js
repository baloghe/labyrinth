import React, { useState } from "react";
import "./Arrow.css";

export default function Arrow({caption, isPushable, arrowClicked, idx, direction, fontSize}){
	
  const [pushable, setPushable] = useState(isPushable);
  
  const handleClick = () => {
  	arrowClicked(idx, direction);
  }
  
  const actClassNames = (x,y) => "arrow" 
								+ " " + (x ? "arrow-pushable" : "arrow-frozen") 
								+ " " + y
								;
  
  //console.log(`movable=${movable}, actClassNames=${actClassNames(movable)}`);

	return (
  <div className={actClassNames(pushable, fontSize)} onClick={handleClick}>
    {caption}
  </div>
  );
}
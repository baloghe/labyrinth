import React, { useState } from "react";
import "./Arrow.css";

export default function Arrow({caption, isPushable, arrowClicked, idx, direction}){
	
  const [pushable, setPushable] = useState(isPushable);
  
  const handleClick = () => {
  	arrowClicked(idx, direction);
  }
  
  const actClassNames = x => "arrow" + " " + (x ? "arrow-pushable" : "arrow-frozen");
  
  //console.log(`movable=${movable}, actClassNames=${actClassNames(movable)}`);

	return (
  <div className={actClassNames(pushable)} onClick={handleClick}>
    {caption}
  </div>
  );
}
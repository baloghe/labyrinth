import React from "react";
import "./Tile.css";

export default function Tile({caption, isMovable, special}){
  
  const specClass = {
  	 'S' : "tile-start"
    ,'F' : "tile-finish"
    ,'P' : "tile-path"
  };
  
  const actClassNames = () => "tile" + " " 
  		+ (isMovable ? "tile-movable" : "tile-frozen")
  		+ (special!=null ? " " + specClass[special] : "")
  		;
  
	return (
  <div className={actClassNames()}>
    {caption}
  </div>
  );
}
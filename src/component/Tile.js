import React from "react";
import getTileSvg from "../logic/getTileSvg.js";

import "./Tile.css";

export default function Tile({caption, isMovable, special, fontSize}){
  
  const specClass = {
  	 'S' : "tile-start"
    ,'F' : "tile-finish"
    ,'P' : "tile-path"
  };
  
  const actClassNames = () => "tile" + " " 
  		+ (isMovable ? "tile-movable" : "tile-frozen")
  		+ (special!=null ? " " + specClass[special] : "")
		+ " " + fontSize
  		;
  
	return (
  <div className={actClassNames()}>
	  {getTileSvg(caption)}
  </div>
  );
}
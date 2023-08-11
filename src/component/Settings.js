import React, { useState } from "react";

import "./Settings.css";

export default function Settings({start}){

	const [rowNum, setRowNum] = useState(3);
	const [colNum, setColNum] = useState(4);
  
  const rowNumChanged = (e) => {
  	setRowNum(e.target.value);
  };
  const colNumChanged = (e) => {
  	setColNum(e.target.value);
  };
  const startGame = () => {
  	//tbd
    //console.log(`Start game: row=${rowNum}, col=${colNum}`);
    start(rowNum, colNum);
  };
  
   return (
    <div className="settings">
    <h3>Set board dimensions!</h3>
    <label key="labRowNum" htmlFor="rowNum">
            Rows: 
    </label>
    <div id="rowNum">
      <select value={rowNum} onChange={rowNumChanged}>
        {[3,4,5,6,7].map((e) => (
					<option key={"r"+e} value={e}>{e}</option>
				))}
      </select>
    </div>
    <label key="labColNum" htmlFor="colNum">
            Columns: 
    </label>
    <div id="colNum">
      <select  value={colNum} onChange={colNumChanged}>
        {[3,4,5,6,7].map((e) => (
					<option key={"c"+e} value={e}>{e}</option>
				))}
      </select>
    </div>
    <button className="startBtn" onClick={startGame}>
      <span>Start</span>
    </button>
    </div>
    );
  
}
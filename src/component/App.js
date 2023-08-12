import React, { useState, useEffect } from "react";
import Settings from "./Settings.js";
import Board from "./Board.js";
import checkPath from "../logic/checkPath.js";
import {cards, cardMap} from "../logic/cards.js";

import "./App.css";

export default function App(){

	const [gameState, setGameState] = useState("settings");
	const [rows, setRows] = useState(3);
	const [cols, setCols] = useState(4);
	const [origGrid, setOrigGrid] = useState([]);
	const [extraCard, setExtraCard] = useState();
	const [moveCounter, setMoveCounter] = useState(0);
	const [results, setResults] = useState([]);
	
	//query window size on creation, taken from:
	//https://codingbeautydev.com/blog/react-get-window-width-height/#:~:text=To%20get%20the%20width%20and,innerHeight%20.
	const [windowSize, setWindowSize] = useState([
		window.innerWidth,
		window.innerHeight,
	  ]);

	useEffect(() => {
		const handleWindowResize = () => {
		  setWindowSize([window.innerWidth, window.innerHeight]);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
		  window.removeEventListener('resize', handleWindowResize);
		};
	  }, []);
  
  const setupBoard = (inr, inc) => {
  	let bNeeded=true;
    let brd=[];
    while(bNeeded){
      brd=[];
      for(let r=0; r<inr; r++){
        for(let c=0; c<inc; c++){
          let idx = Math.floor(Math.random() * parseInt(cards.length));
          brd.push(cards[idx].caption);
        }//c
      }//r
      bNeeded = (checkPath(brd, inr, inc, (inr-1)*inc, inc-1).length>0);
      if(bNeeded){console.log(`generated board already solved => generate new one`);}
    }//wend
    let excrd = cards[Math.floor(Math.random() * parseInt(cards.length))].caption;
    
   setOrigGrid(brd);
   setExtraCard(excrd);
    
  };
  
  const startGame = (r,c) => {
  	setRows(r);
    setCols(c);
    setupBoard(r,c);
    setMoveCounter(0);
    setGameState("game");
  };
  
  const gameFinished = (mc) => {
  	setMoveCounter(mc);
    let newResults = results.map(e=>e);
		newResults.unshift({r:rows,c:cols,m:mc});
    newResults.filter((e,i)=>i<5);
    setResults(newResults);
    
    setGameState("results");
    const st1 = setTimeout(() => {
      	setGameState("settings");
      	clearTimeout(st1);
      }, 3000);
  };
  
  if(gameState == "settings"){
 		return (
    <Settings
      start={startGame}
	  inRows={rows}
	  inCols={cols}
    />
    );
  } else if(gameState == "game"){
    return (
     <Board 
     rows={rows}
     cols={cols}
     origMap={origGrid}
     exCrd={extraCard}
     finish={gameFinished}
	 wSize={windowSize}
     />
    );
  } else if(gameState == "results"){
  	return (
    <div>
    <h3>Results</h3>
    <table key="rtb"><thead>
      <tr>
        <th key="thr">Rows</th>
        <th key="thc">Cols</th>
        <th key="thm">Moves</th>
      </tr>
    </thead><tbody>
      {results.map((e,i)=>(
        <tr key={"tr"+i}>
          <td key={"tdr"+i}>{e.r}</td>
          <td key={"tdc"+i}>{e.c}</td>
          <td key={"tdm"+i}>{e.m}</td>
        </tr>
      ))}
    </tbody>
    </table>
    </div>
    );
  }
}
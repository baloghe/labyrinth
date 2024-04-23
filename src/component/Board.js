import React, { useState } from "react";
import Tile from "./Tile.js";
import Arrow from "./Arrow.js";
import ExtraCardManager from "./ExtraCardManager.js";

import {cards, cardMap} from "../logic/cards.js";
import checkPath from "../logic/checkPath.js";
import gridShiftRow from "../logic/gridShiftRow.js";
import gridShiftCol from "../logic/gridShiftCol.js";

import "./ExtraCardManager.css";

export default function Board({rows, cols, origMap, exCrd, finish, wSize}){

  const [extraCard, setExtraCard] = useState(exCrd);
  const [actMap, setActMap] = useState(origMap);
  const [solPath, setSolPath] = useState([]);
  const [boardState, setBoardState] = useState("game");
  const [moveCnt, setMoveCnt] = useState(0);
  
  const turnCW = () => {
  	let newCap = cardMap.get(extraCard).turnCW;
    //console.log(`turnCW : ${extraCard} -> ${newCap}`);
  	setExtraCard(newCap);
  };
  const turnCCW = () => {
  	let newCap = cardMap.get(extraCard).turnCCW;
    //console.log(`turnCCW : ${extraCard} -> ${newCap}`);
  	setExtraCard(newCap);
  };
  
  const afterShift = (newGrid) => {
  	const newMoveCnt = moveCnt+1;
  	setMoveCnt(newMoveCnt);
    let pt = checkPath(newGrid, rows, cols, (parseInt(rows)-1)*parseInt(cols), parseInt(cols)-1);
    setSolPath(pt);
    if(pt.length > 0){
    	//solution found
		leaveBoard(newMoveCnt);
    }
  };
  
  const leaveBoard = (cnt) => {
      setBoardState("finish");
      const st1 = setTimeout(() => {
      	finish(cnt);
      	clearTimeout(st1);
      }, 2000);
  };
  
  const shiftRow = (r, d) => {
  	if(boardState=="finish") return;
  	const [newGrid, newExCrd] = gridShiftRow(actMap, parseInt(rows), parseInt(cols), r, d, extraCard);
    setActMap( newGrid );
    setExtraCard( newExCrd );
    afterShift(newGrid);
  };
  
  const shiftCol = (c, d) => {
  	if(boardState=="finish") return;
  	const [newGrid, newExCrd] = gridShiftCol(actMap, parseInt(rows), parseInt(cols), c, d, extraCard);
    setActMap( newGrid );
    setExtraCard( newExCrd );
    afterShift(newGrid);
  };

	const pushable = new Map();
  for(let r = 0; r<parseInt(rows)+2; r++){
  	for(let c = 0; c<parseInt(cols)+2; c++){
    	if(  ((r==0 || r==parseInt(rows)+1) && c>0 && c<parseInt(cols)+1)
         ||((c==0 || c==parseInt(cols)+1) && r>0 && r<parseInt(rows)+1))
      {
      	//console.log(`add ${r+'|'+c}`);
      	pushable.set(r+'|'+c,true);
      }
    }//next c
  }//next r

	const getEmptyCell = (r,c) => {
  	return (
        <td key={'e'+r+'-'+c} />
        );
  }
  
  const getFontSize = () => {
	const aw = wSize[0] / (cols+5),
	      ah = wSize[1] / (rows+2)
	      ;
	if( (aw > 80) && (ah > 80) ){
		return 'font-large';
	} else if( (aw > 50) && (ah > 50) ){
		return 'font-medium';
	} else {
		return 'font-small'
	}
  };
  
  const getLayout = () => {
	if(wSize[0] < wSize[1]){
		return 'V';
	} else {
		return 'H';
	}
  };
  
  const getControl = (r,c,m) => {
  	let caption, dir, cbk, idx;
    if(c==(parseInt(cols)+1)){
    	//shift left
      caption = '\u21d0';
      dir = -1;
      cbk = shiftRow;
      idx = r-1;
    } else if(c==0) {
    	//shift right
      caption = '\u21d2';
      dir = 1;
      cbk = shiftRow;
      idx = r-1;
    } else if(r==0) {
    	//shift down
      caption = '\u21d3';
      dir = 1;
      cbk = shiftCol;
      idx = c-1;
    } else {
    	//shift up
      caption = '\u21d1';
      dir = -1;
      cbk = shiftCol;
      idx = c-1;
    }
    return (
        <td key={'c'+r+'|'+c}>
          <Arrow
            caption={caption}
            isPushable={m}
            arrowClicked={cbk}
            idx={idx}
            direction={dir}
			fontSize={getFontSize()}
          />
        </td>
    );
  }

  const getTile = (c,m,i,spec) => {
  	return (
        <td key={'c'+i}>
          <Tile caption={c} isMovable={m} special={spec} fontSize={getFontSize()}/>
        </td>
        );
  }

  const getRow = (r) => {
    //console.log(`  getRow :: s=${s}, c=${c}`);
    let ret = [];
    if( r==0 || r==parseInt(rows)+1 ){
    	//pure control row
      for(let y=0; y<parseInt(cols)+2; y++){
      	if(y==0 || y==(parseInt(cols)+1)){
        	//empty cell
          ret.push(getEmptyCell(r,y));
        } else {
        	//control button
          ret.push(getControl(r,y,pushable.get(r+'|'+y)));
        }
      }
    } else {
    	//mixed row
      //left arrow
      ret.push( getControl(r,0,pushable.get(r+'|0')) );
      //tiles
      const s=(r-1)*parseInt(cols);
      for(let i=s; i<s+parseInt(cols); i++){
        //console.log(`  getRow :: i=${i}, upper=${upper}`);
        let spec=null;
        if(i==(parseInt(rows)-1)*parseInt(cols)){
        	spec='S';
        } else if(i==(parseInt(cols)-1)) {
        	spec='F';
        } else if(solPath.includes(i)){
        	spec='P';
        }
        ret.push( getTile(actMap[i], true, i, spec) );
      }
      //right arrow
      ret.push( getControl(r,parseInt(cols)+1,pushable.get(r+'|'+(parseInt(cols)+1))) );
    }
    return ret;
  }
  
  const exitGame = () => {
	leaveBoard(-1);
  };

  const genRows = () => {
    let i=0;
    const ret = [];
    for(let r=0; r<parseInt(rows)+2; r++){
      //console.log(`genRows :: r=${r}`);
      ret.push(<tr key={'r'+r}>
                {getRow(r)}
              </tr>
              );
    }
    return ret;
  }
  
  if( getLayout()==='H' ){
	  return (
		<table className="padded"><tbody>
		<tr><td className="padded">
		  <table><tbody>
		  {genRows()}
		  </tbody></table>
		</td><td className="padded">
		  <ExtraCardManager excrdCaption={extraCard} rotateCW={turnCW} rotateCCW={turnCCW} fontSize={getFontSize()} />
		  </td><td className="padded">
		  <button className="startBtn" onClick={exitGame}>
			  <span>Give up</span>
			</button>
		  </td></tr>
		</tbody></table>
		);
  } else {
	  return (
		<table className="padded"><tbody>
		<tr><td className="padded">
		  <table><tbody>
		  {genRows()}
		  </tbody></table>
		</td>
		</tr>
		<tr><td className="padded">
		  <ExtraCardManager excrdCaption={extraCard} rotateCW={turnCW} rotateCCW={turnCCW} fontSize={getFontSize()} />
		  </td>
		</tr>
		<tr><td className="padded">
		  <button className="startBtn" onClick={exitGame}>
			  <span>Give up</span>
			</button>
		  </td></tr>
		</tbody></table>
		);
  }
}

export default function checkPath (inGrid, rowNum, colNum, inStartIdx, inEndIdx) {
	const stack = [{idx: inStartIdx, pth:[]}]; //entries: {idx: num, pth:[...num]}
  while(stack.length > 0 && stack[0].idx != inEndIdx){
  	let actElem = stack.splice(0,1)[0];
    let actPos = idx2coord(actElem.idx, rowNum, colNum);
    let actCard = cardMap.get(inGrid[actElem.idx]);
    
    //check if we can leave actElem upwards
    if(actCard.up && actPos.row > 0){
    	let neighborIdx = coord2idx(actPos.row-1, actPos.col, colNum);
      let neighbor = cardMap.get(inGrid[neighborIdx]);
      //check if neighbor is not already on the actual path
      if(neighbor.down && (!actElem.pth.includes(neighborIdx))){
      	let newElem = {idx: neighborIdx, pth: [...actElem.pth, actElem.idx]};
        stack.unshift(newElem);
      }
    }//up
    //check if we can leave actElem downwards
    if(actCard.down && actPos.row <rowNum-1){
    	let neighborIdx = coord2idx(actPos.row+1, actPos.col, colNum);
    	let neighbor = cardMap.get(inGrid[neighborIdx]);
      //check if neighbor is not already on the actual path
      if(neighbor.up && (!actElem.pth.includes(neighborIdx))){
      	let newElem = {idx: neighborIdx, pth: [...actElem.pth, actElem.idx]};
        stack.unshift(newElem);
      }
    }//down
    
    //check if we can leave actElem leftwards
    if(actCard.left && actPos.col>0){
    	let neighborIdx = coord2idx(actPos.row, actPos.col-1, colNum);
    	let neighbor = cardMap.get(inGrid[neighborIdx]);
      //check if neighbor is not already on the actual path
      if(neighbor.right && (!actElem.pth.includes(neighborIdx))){
      	let newElem = {idx: neighborIdx, pth: [...actElem.pth, actElem.idx]};
        stack.unshift(newElem);
      }
    }//left
    
    //check if we can leave actElem rightwards
    if(actCard.right && actPos.col<colNum-1){
    	let neighborIdx = coord2idx(actPos.row, actPos.col+1, colNum);
    	let neighbor = cardMap.get(inGrid[neighborIdx]);
      //check if neighbor is not already on the actual path
      if(neighbor.left && (!actElem.pth.includes(neighborIdx))){
      	let newElem = {idx: neighborIdx, pth: [...actElem.pth, actElem.idx]};
        stack.unshift(newElem);
      }
    }//right
  }//wend
  //check if a path has been found
  if(stack.length > 0 && stack[0].idx == inEndIdx){
  	return stack[0].pth.filter((e,i)=>(i>0));
  } else {
  	return [];
  }
}
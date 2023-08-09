export default function gridShiftCol (origArr, rows, cols, c, d, excrd) {
  	let si = c;
    let ei = si+(rows-1)*cols;
    //d>0 => shift down
    let idxs;
    if(d>0){
    	idxs = Array.from({length: rows}, (v, i) => ei-i*cols);
    //else shift up
    } else {
    	idxs = Array.from({length: rows}, (v, i) => si+i*cols);
    }
    //console.log(`shiftCol :: si=${si}, ei=${ei}, idxs=${JSON.stringify(idxs)}`);
    //change array elements one by one
    let newGrid = origArr.map(e=>e);
    for(let i=0; i<idxs.length-1; i++){
    	[ newGrid[idxs[i]] , newGrid[idxs[i+1]] ] = [ newGrid[idxs[i+1]] , newGrid[idxs[i]] ];
      //console.log(`shiftCol :: i=${i}, swap ${idxs[i]} and ${idxs[i+1]}`);
    }
    
    //handle extra card: extra card changes place with last index
    let newExCrd;
    [newGrid[idxs[idxs.length-1]] , newExCrd] = [excrd , newGrid[idxs[idxs.length-1]]];
    
    return [newGrid, newExCrd];
  }
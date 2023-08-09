export default function gridShiftRow(origArr, rows, cols, r, d, excrd) {
    let si = r*cols;
    let ei = si+cols-1;
    let newGrid = origArr.map(e=>e);
    let newExCrd;
  	//d>0 => shift to the right
    if(d>0){
      let rm = newGrid.splice(ei,1);
      //newGrid.splice(si,0,rm[0]);
      newGrid.splice(si,0,excrd);
      newExCrd = rm[0];
    //otherwise: shift to the left
    } else {
    	let rm = newGrid.splice(si,1);
      //newGrid.splice(ei,0,rm[0]);
      newGrid.splice(ei,0,excrd);
      newExCrd = rm[0];
    }
    return [newGrid, newExCrd];
}


function getFourWay(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<line x1="0" y1="10" x2="10" y2="10"/>
		<line x1="10" y1="10" x2="10" y2="0"/>
		<line x1="20" y1="0" x2="20" y2="10"/>
		<line x1="20" y1="10" x2="30" y2="10"/>
		<line x1="0" y1="20" x2="10" y2="20"/>
		<line x1="10" y1="20" x2="10" y2="30"/>
		<line x1="20" y1="20" x2="30" y2="20"/>
		<line x1="20" y1="20" x2="20" y2="30"/>
		<rect width="30" height="10" x="0" y="10" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="10" height="30" x="10" y="0" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
        <rect x="0" y="0" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="20" y="0" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="0" y="20" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="20" y="20" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
	  </g>
	</svg>
	);
	
}

function getHorizontal(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<line x1="0" y1="10" x2="30" y2="10"/>
		<line x1="0" y1="20" x2="30" y2="20"/>
		<rect width="30" height="10" x="0" y="10" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
        <rect x="0" y="0" width="30" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="0" y="20" width="30" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
	  </g>
	</svg>
	);
	
}

function getVertical(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<line x1="10" y1="0" x2="10" y2="30"/>
		<line x1="20" y1="0" x2="20" y2="30"/>
		<rect width="10" height="30" x="10" y="0" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
        <rect x="0" y="0" width="10" height="30" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="20" y="0" width="10" height="30" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
	  </g>
	</svg>
	);
	
}

function getTDown(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<line x1="0" y1="10" x2="30" y2="10"/>
		<line x1="0" y1="20" x2="10" y2="20"/>
		<line x1="10" y1="20" x2="10" y2="30"/>
		<line x1="20" y1="20" x2="30" y2="20"/>
		<line x1="20" y1="20" x2="20" y2="30"/>
		<rect width="30" height="10" x="0" y="10" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="10" height="10" x="10" y="20" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
        <rect x="0" y="0" width="30" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="0" y="20" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="20" y="20" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
	  </g>
	</svg>
	);
	
}

function getTRight(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<line x1="10" y1="0" x2="10" y2="30"/>
		<line x1="20" y1="0" x2="20" y2="10"/>
		<line x1="20" y1="10" x2="30" y2="10"/>
		<line x1="20" y1="20" x2="20" y2="30"/>
		<line x1="20" y1="20" x2="30" y2="20"/>
		<rect width="10" height="30" x="10" y="0" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="10" height="10" x="20" y="10" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
        <rect x="0" y="0" width="10" height="30" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="20" y="20" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="20" y="0" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
	  </g>
	</svg>
	);
	
}

function getTUp(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<line x1="0" y1="20" x2="30" y2="20"/>
		<line x1="0" y1="10" x2="10" y2="10"/>
		<line x1="10" y1="10" x2="10" y2="0"/>
		<line x1="20" y1="10" x2="30" y2="10"/>
		<line x1="20" y1="10" x2="20" y2="0"/>
		<rect width="30" height="10" x="0" y="10" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="10" height="10" x="10" y="0" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
        <rect x="0" y="20" width="30" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="00" y="0" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="20" y="0" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
	  </g>
	</svg>
	);
	
}

function getTLeft(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<line x1="20" y1="0" x2="20" y2="30"/>
		<line x1="0" y1="10" x2="10" y2="10"/>
		<line x1="10" y1="10" x2="10" y2="0"/>
		<line x1="0" y1="20" x2="10" y2="20"/>
		<line x1="10" y1="20" x2="10" y2="30"/>
		<rect width="10" height="30" x="10" y="0" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="10" height="10" x="0" y="10" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
        <rect x="20" y="0" width="10" height="30" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="0" y="0" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="0" y="20" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
	  </g>
	</svg>
	);
	
}

function getLeftUp(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<line x1="0" y1="10" x2="10" y2="10"/>
		<line x1="10" y1="10" x2="10" y2="0"/>
		<line x1="0" y1="20" x2="20" y2="20"/>
		<line x1="20" y1="20" x2="20" y2="0"/>
		<rect width="20" height="10" x="0" y="10" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="10" height="10" x="10" y="0" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
        <rect x="20" y="0" width="10" height="30" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="0" y="0" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="0" y="20" width="20" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
	  </g>
	</svg>
	);
	
}

function getUpRight(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<line x1="10" y1="0" x2="10" y2="20"/>
		<line x1="10" y1="20" x2="30" y2="20"/>
		<line x1="20" y1="0" x2="20" y2="10"/>
		<line x1="20" y1="10" x2="30" y2="10"/>
		<rect width="20" height="10" x="10" y="10" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="10" height="10" x="10" y="0" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
        <rect x="0" y="0" width="10" height="30" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="10" y="20" width="20" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="20" y="0" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
	  </g>
	</svg>
	);
	
}

function getRightDown(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<line x1="10" y1="10" x2="30" y2="10"/>
		<line x1="10" y1="10" x2="10" y2="30"/>
		<line x1="20" y1="20" x2="30" y2="20"/>
		<line x1="20" y1="20" x2="20" y2="30"/>
		<rect width="20" height="10" x="10" y="10" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="10" height="10" x="10" y="20" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
        <rect x="0" y="0" width="10" height="30" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="10" y="0" width="20" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="20" y="20" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
	  </g>
	</svg>
	);
	
}

function getDownLeft(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<line x1="0" y1="20" x2="10" y2="20"/>
		<line x1="10" y1="20" x2="10" y2="30"/>
		<line x1="0" y1="10" x2="20" y2="10"/>
		<line x1="20" y1="10" x2="20" y2="30"/>
		<rect width="20" height="10" x="0" y="10" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="10" height="10" x="10" y="20" fill="yellow" fill-opacity="0.5" stroke-opacity="0" />
        <rect x="20" y="0" width="10" height="30" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="0" y="0" width="20" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
        <rect x="0" y="20" width="10" height="10" fill="url(#bricks)" stroke="white" stroke-opacity="1.0" />
	  </g>
	</svg>
	);
	
}

function NoSuchWay(baseColor){
	
	return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
	  <defs>
	  <pattern id="bricks" width="10" height="10" patternUnits="userSpaceOnUse" >
		<rect width="4" height="4" x="0" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="4" height="4" x="5" y="0" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
		<rect width="8" height="4" x="1" y="5" stroke="brown" fill="brown" fill-opacity="0.5" stroke-opacity="0" />
	  </pattern>
	  </defs>
	  <g stroke="black" stroke-width="1" stroke-linecap="round">
		<circle cx="15" cy="15" r="10" />
	  </g>
	</svg>
	);
	
}

export default function getTileSvg(caption, extra) {
	let baseColor = "white";
	if(caption=='s-4'){
		return getFourWay(baseColor);
	} else if(caption=='s-2-1') {
		return getHorizontal(baseColor);
	} else if(caption=='s-2-2') {
		return getVertical(baseColor);
	} else if(caption=='s-2-2') {
		return getVertical(baseColor);
	} else if(caption=='s-3-1') {
		return getTDown(baseColor);
	} else if(caption=='s-3-2') {
		return getTRight(baseColor);
	} else if(caption=='s-3-3') {
		return getTUp(baseColor);
	} else if(caption=='s-3-4') {
		return getTLeft(baseColor);
	} else if(caption=='s-2x-1') {
		return getLeftUp(baseColor);
	} else if(caption=='s-2x-2') {
		return getUpRight(baseColor);
	} else if(caption=='s-2x-3') {
		return getRightDown(baseColor);
	} else if(caption=='s-2x-4') {
		return getDownLeft(baseColor);
	} else {
		return NoSuchWay(baseColor);
	}
}
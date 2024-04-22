const cards = [
{caption: '\u2550', up: false, down: false, left: true, right: true, turnCW: '\u2551', turnCCW: '\u2551'}
,{caption: '\u2551', up: true, down: true, left: false, right: false, turnCW: '\u2550', turnCCW: '\u2550'}
,{caption: '\u2554', up: false, down: true, left: false, right: true, turnCW: '\u2557', turnCCW: '\u255A'}
,{caption: '\u2557', up: false, down: true, left: true, right: false, turnCW: '\u255D', turnCCW: '\u2554'}
,{caption: '\u255A', up: true, down: false, left: false, right: true, turnCW: '\u2554', turnCCW: '\u255D'}
,{caption: '\u255D', up: true, down: false, left: true, right: false, turnCW: '\u255A', turnCCW: '\u2557'}
,{caption: '\u2560', up: true, down: true, left: false, right: true, turnCW: '\u2566', turnCCW: '\u2569'}
,{caption: '\u2563', up: true, down: true, left: true, right: false, turnCW: '\u2569', turnCCW: '\u2566'}
,{caption: '\u2566', up: false, down: true, left: true, right: true, turnCW: '\u2563', turnCCW: '\u2560'}
,{caption: '\u2569', up: true, down: false, left: true, right: true, turnCW: '\u2560', turnCCW: '\u2563'}
,{caption: '\u256C', up: true, down: true, left: true, right: true, turnCW: '\u256C', turnCCW: '\u256C'}
];

const cardsSvg = [
{caption: 's-2-1', up: false, down: false, left: true, right: true, turnCW: 's-2-2', turnCCW: 's-2-2'}
,{caption: 's-2-2', up: true, down: true, left: false, right: false, turnCW: 's-2-1', turnCCW: 's-2-1'}
,{caption: 's-2x-3', up: false, down: true, left: false, right: true, turnCW: 's-2x-4', turnCCW: 's-2x-2'}
,{caption: 's-2x-4', up: false, down: true, left: true, right: false, turnCW: 's-2x-1', turnCCW: 's-2x-3'}
,{caption: 's-2x-2', up: true, down: false, left: false, right: true, turnCW: 's-2x-3', turnCCW: 's-2x-1'}
,{caption: 's-2x-1', up: true, down: false, left: true, right: false, turnCW: 's-2x-2', turnCCW: 's-2x-4'}
,{caption: 's-3-2', up: true, down: true, left: false, right: true, turnCW: 's-3-1', turnCCW: 's-3-3'}
,{caption: 's-3-4', up: true, down: true, left: true, right: false, turnCW: 's-3-3', turnCCW: 's-3-1'}
,{caption: 's-3-1', up: false, down: true, left: true, right: true, turnCW: 's-3-4', turnCCW: 's-3-2'}
,{caption: 's-3-3', up: true, down: false, left: true, right: true, turnCW: 's-3-2', turnCCW: 's-3-4'}
,{caption: 's-4', up: true, down: true, left: true, right: true, turnCW: 's-4', turnCCW: 's-4'}
];

const cardMap = new Map();
//cards.forEach(e=>cardMap.set(e.caption, {up: e.up, down: e.down, left: e.left, right: e.right, turnCW: e.turnCW, turnCCW: e.turnCCW}));
cardsSvg.forEach(e=>cardMap.set(e.caption, {up: e.up, down: e.down, left: e.left, right: e.right, turnCW: e.turnCW, turnCCW: e.turnCCW}));

export {cardsSvg, cardMap};

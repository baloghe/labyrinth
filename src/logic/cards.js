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

const cardMap = new Map();
cards.forEach(e=>cardMap.set(e.caption, {up: e.up, down: e.down, left: e.left, right: e.right, turnCW: e.turnCW, turnCCW: e.turnCCW}));

export {cards, cardMap};

export default function idx2coord(idx, rowNum, colNum) {
	const c = idx % parseInt(colNum);
  const r = (idx - c) / parseInt(colNum);
  return {row: r, col: c};
}
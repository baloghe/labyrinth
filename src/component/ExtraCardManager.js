import React from "react";
import Tile from "./Tile.js";
import Rotator from "./Rotator.js";

import "./ExtraCardManager.css";

export default function ExtraCardManager({excrdCaption, rotateCW, rotateCCW}){

	return (
  <div>
    <p>Extra card:</p>
    <table className="padded"><tbody>
    <tr key="tile"><td className="spanned" colSpan={2}>
      <Tile caption={excrdCaption} isMovable={true} />
      </td>
    </tr>
      <tr key="control">
        <td key="CW" className="padded">
          <Rotator caption={'\u21BB'} rotatorClicked={rotateCW} />
        </td>
        <td key="CCW" className="padded">
          <Rotator caption={'\u21BA'} rotatorClicked={rotateCCW} />
        </td>
      </tr>
    </tbody></table>
  </div>
  );
}
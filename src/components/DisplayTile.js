import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DisplayTile.css";

export default function DisplayTile(props) {
  let [overlay, setOverlay] = useState(false);

  function ToggleOverlay(overlay) {
    if (overlay === true) {
      setOverlay(true);
    } else {
      setOverlay(false);
    }
  }

  return (
    <div
      className="TileBox"
      onMouseEnter={() => ToggleOverlay(true)}
      onMouseLeave={() => ToggleOverlay(false)}
    >
      <img src={props.source} alt="img Here" className="Tile-img"></img>
      <div className="Overlay" style={{ display: overlay ? "flex" : "none" }}>
        <h1>{props.title}</h1>
        <div className="Tile-Info">
          <img src={props.thumbnail} alt=""></img>
          <div className="Info-Text">
            <p>{props.description}</p>

            <Link to={props.link}>
              <p>See More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

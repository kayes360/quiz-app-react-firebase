import React from "react";
import classes from "../assets/css/Miniplayer.module.css";
import MiniPlayerImg from "../assets/img/3.jpg";

export default function Miniplayer() {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
      <span className={`material-icons-outlined ${classes.close}`}> close </span>
      <img src={MiniPlayerImg} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}

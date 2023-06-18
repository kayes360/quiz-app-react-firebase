import React from "react";
import image from "../assets/img/3.jpg";
import classes from '../assets/css/Video.module.css';


export default function Video() {
  return (
    <a href="quiz.html">
      <div class={classes.video}>
        <img src={image} alt="Video title" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div class={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}

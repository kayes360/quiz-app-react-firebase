import React from "react";
import classes from "../assets/css/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text=" A New Hope 1" />
    </div>
  );
}

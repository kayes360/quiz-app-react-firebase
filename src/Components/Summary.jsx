import React from "react";
import classes from "../assets/css/Summary.module.css";
import SuccessImg from "../assets/img/success.png"

export default function Summary() {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={classes.badge}>
        <img src={SuccessImg} alt="Success" />
      </div>
    </div>
  );
}

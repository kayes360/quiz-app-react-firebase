import React from "react";
import signup from "../assets/img/signup.svg";
import login from "../assets/img/login.svg";
import classes from "../assets/css/Illustration.module.css";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signup} alt="Signup" />
    </div>
  );
}
export  function LoginIllustration() {
  return (
    <div className={classes.illustration}>
      <img src={login} alt="Signup" />
    </div>
  );
}

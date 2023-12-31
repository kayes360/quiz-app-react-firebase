import React from "react";
import classes from "../assets/css/Button.module.css";

export default function Button({ className, children }) {
  return <div className={`${classes.button} ${className} `}>{children}</div>;
}

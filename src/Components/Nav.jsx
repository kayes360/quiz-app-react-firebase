import React from "react";
import Logo from '../assets/img/logo-bg.png'
import classes from '../assets/css/Nav.module.css';
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={Logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>

      <Account/>
    </nav>
  );
}

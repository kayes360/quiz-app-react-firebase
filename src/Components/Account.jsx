import React from 'react'
import classes from '../assets/css/Account.module.css'


export default function Account() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
       {/* <span class="material-icons-outlined" title="Logout"> logout </span>  */}
    </div>
  )
}

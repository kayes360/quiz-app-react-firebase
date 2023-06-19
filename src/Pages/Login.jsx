import React from "react";
import { LoginIllustration } from "../Components/Illustration";
import classes from "../assets/css/Login.module.css";

import Form from "../Components/Form";
import Button from "../Components/Button";
import TextInput from "../Components/Textinput";
export default function Login() {
  return (
    <div>
      <h1>Login to your account</h1>

      <div className="column">
      <LoginIllustration />
      <Form className={`${classes.login} form`}>
        <TextInput
          type="text"
          placeholder="Enter Email"
          icon="alternate_email"
        />
        <TextInput type="password" placeholder="Enter Password" icon="lock" />
        <Button><span>Submit Now</span></Button>
        <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>

      </Form>
      </div>
    </div>
  );
}

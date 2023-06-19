import React from "react";
import classes from "../assets/css/Signup.module.css";
import Form from "../Components/Form";
import Illustration from "../Components/Illustration";
import TextInput from "../Components/Textinput";
import Checkbox from "../Components/Checkbox";
import Button from "../Components/Button";
export default function Signup() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup} form`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button><span>Submit Now</span></Button>
          <div class="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}

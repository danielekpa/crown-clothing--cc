import {updateProfile} from "firebase/auth";
import React, {Component, Fragment} from "react";
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase.util";
import FormInput from "../form-input/form-input.component";
import {handleChange} from "../../utils/handle-input-change.util";
import "./sign-up.styles.scss";
import Button from "../button/button.component";

export class SignUp extends Component {
  constructor() {
    super();
    this.initState = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.state = {
      ...this.initState,
    };
    this.handleChange = handleChange.bind(this);
  }

  /* handleChange(event) {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState((prevState) => ({...prevState, [name]: value}));
  } */

  signUpUserHandler = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;

    if (!password || password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const {user} = userCredential;
      const userDocRef = await createUserDocFromAuth(user, {displayName});
      this.setState({...this.initState});
    } catch (error) {
      console.log("Error signing up, ", error);
    }
  };

  render() {
    const {state, handleChange, signUpUserHandler} = this;
    const {displayName, email, password, confirmPassword} = state;
    return (
      <Fragment>
        <div className="sign-up-container">
          {/* <h2>Don't have an account?</h2> */}
          <h2>Create an account</h2>
          <span>Sign up with your email and password</span>
          <form className="sign-up-form" onSubmit={signUpUserHandler}>
            <FormInput
              label="Display Name"
              type="text"
              required
              onChange={handleChange}
              name="displayName"
              value={displayName}
            />

            <FormInput
              label="Email"
              type="email"
              required
              onChange={handleChange}
              name="email"
              value={email}
            />

            <FormInput
              label="Password"
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
              minLength={6}
            />

            <FormInput
              label="Confirm Password"
              type="password"
              required
              minLength={6}
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
            />

            <Button type="submit">Sign Up to Crown Clothing</Button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default SignUp;

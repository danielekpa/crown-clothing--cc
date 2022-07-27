import React, {Component, Fragment} from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../../utils/firebase.util";
import FormInput from "../../../components/form-input/form-input.component";
import {handleChange} from "../../../utils/handle-input-change.util";
import "./sign-up.styles.scss";
import Button from "../../../components/button/button.component";
import {Link} from "react-router-dom";
import {UserContext} from "../../../contexts/user.context";
import {Oval} from "react-loader-spinner";

export class SignUp extends Component {
  static contextType = UserContext;
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
      loading: false,
      error: "",
    };
    this.handleChange = handleChange.bind(this);
  }

  signUpUserHandler = async (event) => {
    this.setState({error: false, loading: true});
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
      await createUserDocFromAuth(user, {displayName});
      this.setState({...this.initState, loading: false});
    } catch (error) {
      this.setState({error, loading: false});
      console.log("Error signing up, ", error);
    }
  };

  render() {
    const {state, handleChange, signUpUserHandler} = this;
    const {displayName, email, password, confirmPassword, error, loading} =
      state;
    return (
      <Fragment>
        <div className="sign-up-container">
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
              error={error}
            />
          </form>
          {loading ? (
            <Oval
              color="#00BFFF"
              height={45}
              width={45}
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          ) : (
            <>
              <Button
                buttonType="signUp"
                type="submit"
                onClick={signUpUserHandler}
              >
                Sign Up to Crown Clothing
              </Button>
              <p className="signin-redirect-text">
                {" "}
                Already have an account?{" "}
                <Link className="signin-redirect-link" to={"/auth/sign-in"}>
                  &nbsp;Sign In
                </Link>
              </p>
            </>
          )}
        </div>
      </Fragment>
    );
  }
}
SignUp.contextType = UserContext;

export default SignUp;

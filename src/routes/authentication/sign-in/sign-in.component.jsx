import React, {Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../../components/button/button.component";
import {Oval} from "react-loader-spinner";
import FormInput from "../../../components/form-input/form-input.component";
import {UserContext} from "../../../contexts/user.context";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  checkIfUSerExists,
  signInAuthUserWithEmailAndPassword,
  deleteAuthUser,
} from "../../../utils/firebase.util";
import {handleChange} from "../../../utils/handle-input-change.util";
import "./sign-in.styles.scss";

export default class SignIn extends Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.initState = {
      email: "",
      password: "",
    };
    this.state = {
      ...this.initState,
      loading: false,
      error: "",
    };
    this.handleChange = handleChange.bind(this);
  }

  componentDidMount() {
    /* let value = this.context;
    console.log(value); */
    /* perform a side-effect at mount using the value of MyContext */
  }

  componentDidUpdate() {
    /*  let value = this.context;
    console.log(value, this.state.loading); */
    /* ... */
  }

  destructureUser = (res) => {
    const {user} = res;
    return user;
  };

  logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      await createUserDocFromAuth(this.destructureUser(response));
      return;
    } catch (error) {
      console.log(error, error.message);
    }
  };

  handleUserLogin = async () => {
    this.setState({error: false, loading: true});
    try {
      const {email, password} = this.state;
      // console.log(email, password);
      const userCredential = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      const {user} = userCredential;
      // console.l og(user);
      const userDocRef = await checkIfUSerExists(user);
      this.setState({
        ...this.initState,
        loading: false,
      });
      if (!userDocRef.exists()) {
        await deleteAuthUser(user);
        return alert("User does not exist");
      }
    } catch (error) {
      const errorCode = error.code;
      console.log("Error code", errorCode);
      this.setState({error, loading: false});
      // console.log("Failed", error);
    }
  };

  render() {
    const {email, password, error, loading} = this.state;
    return (
      <div className="sign-in-container">
        <h2>Sign in to your account</h2>
        <form className="sign-in-form" onSubmit={this.handleUserLogin}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={this.handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={this.handleChange}
            name="password"
            value={password}
            error={error}
          />
          {/* <ErrorLabel errorLabel={errorMessage} /> */}
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
          <div className="signIn-button-container">
            <Button type="submit" onClick={this.handleUserLogin}>
              Sign In
            </Button>
            <Button
              type="button"
              buttonType="google"
              onClick={this.logGoogleUser}
            >
              Sign in with Google
            </Button>
          </div>
        )}

        <p className="signup-redirect-text">
          {" "}
          Don't have an account?{" "}
          <Link className="signup-redirect-link" to={"/auth/sign-up"}>
            &nbsp;Sign Up
          </Link>
        </p>
      </div>
    );
  }
}

SignIn.contextType = UserContext;

/*  async componentDidMount() {
     const response = await getRedirectResult(auth);
     // console.log(response);
     if (response) {
       const userDocRef = await createUserDocFromAuth(this.destructureUser(response));
     }
   } */

// {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google redireect</button> */ }

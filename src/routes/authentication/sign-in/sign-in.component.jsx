import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../../components/button/button.component';
import FormInput from '../../../components/form-input/form-input.component';
import SignUp from '../sign-up/sign-up.component';
import { signInWithGooglePopup, createUserDocFromAuth, checkIfUSerExists, auth, signInAuthUserWithEmailAndPassword, deleteAuthUser } from '../../../utils/firebase.util';
import { handleChange } from '../../../utils/handle-input-change.util';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './sign-in.styles.scss'


export default class SignIn extends Component {
  constructor() {
    super();
    this.initState = {
      email: "",
      password: "",
    };
    this.state = {
      ...this.initState,
    }
    this.handleChange = handleChange.bind(this);
  }

  destructureUser = (res) => {
    const { user } = res;
    return user
  }

  logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    return await createUserDocFromAuth(this.destructureUser(response));
  }

  logUser = async () => {
    try {
      const { email, password } = this.state;
      console.log(email, password);
      const userCredential = await signInAuthUserWithEmailAndPassword(email, password);
      const { user } = userCredential;
      console.log(user);
      const userDocRef = await checkIfUSerExists(user);
      if (!userDocRef.exists()) {
        await deleteAuthUser(user)
        return (alert('User does not exist')
        )
      }

      console.log(userDocRef.data());

      this.state = {
        ...this.initState,
      }
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error code', errorCode, 'Eerror Message', errorMessage);
      // console.log("Failed", error);
    }
  }

  render() {

    const { email, password } = this.state;
    return (
      <div className="sign-in-container">
        <h2>Sign in to your account</h2>
        <form className="sign-in-form">
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
          />
        </form>

        <div className="signIn-button-container">
          <Button type="submit" onClick={this.logUser}>Sign In</Button>
          <Button buttonType="google" onClick={this.logGoogleUser}>Sign in with Google</Button>
        </div>

        <p className="signup-redirect-text"> Don't have an account?  <Link className="signup-redirect-link" to={'/auth/sign-up'}>&nbsp;Sign Up</Link></p>
      </div>
    )
  }
}


/*  async componentDidMount() {
     const response = await getRedirectResult(auth);
     // console.log(response);
     if (response) {
       const userDocRef = await createUserDocFromAuth(this.destructureUser(response));
     }
   } */

// {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google redireect</button> */ }
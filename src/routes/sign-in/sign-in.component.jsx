import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase.util';
import { handleChange } from '../../utils/handle-input-change.util';
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
    const userDocRef = await createUserDocFromAuth(this.destructureUser(response));
  }

  render() {

    const { email, password } = this.state;
    return (
      <div className="sign-in-container">
        <h2>Sign in to your account</h2>
        <form className="sign-in-form" >
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
          <Button type="submit">Sign In</Button>
          <Button type='submit' buttonType="google" onClick={this.logGoogleUser}>Sign in with Google</Button>
        </div>

        <p className="sign-redirect-text"> Don't have an account?  <Link className="sign-redirect-link" to={'/sign-up'}>Sign Up</Link></p>
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
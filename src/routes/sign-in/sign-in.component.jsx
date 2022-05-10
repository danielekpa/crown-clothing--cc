import React, { Component, Fragment } from 'react'
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase.util';


export default class SignIn extends Component {

  logGoogleUser = async () => {

    const response = await signInWithGooglePopup();
    console.log(response);  
    await createUserDocFromAuth(response.user);
    /* .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    })
      ; */
  }
  render() {
    return (
      <Fragment>

        <h1>Sign In page</h1>
        <button onClick={this.logGoogleUser}>Sign in with Google</button>
      </Fragment>
    )
  }
}

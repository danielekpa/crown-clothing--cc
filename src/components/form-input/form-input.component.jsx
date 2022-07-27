import React, {Component} from "react";
import "./form-input.styles.scss";

export class FormInput extends Component {
  render() {
    const {label, error, ...inputProps} = this.props;
    const name =
      inputProps.name === "confirmPassword" ? inputProps.name : "password";

    let errorMessage;
    switch (error?.code) {
      case "auth/wrong-password":
        errorMessage = "Incorrect email or password";
        break;
      case "auth/user-not-found":
        errorMessage = "User does not exist";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email provided";
        break;
      case "auth/email-already-in-use":
        errorMessage = "Email exists already";
        break;
      case "auth/network-request-failed":
        errorMessage = "Invalid email provided";
        break;
      default:
        errorMessage = error?.message;
    }

    return (
      <div className="group">
        <input className="form-input" {...inputProps} />
        {label && (
          <label
            className={`form-input-label ${inputProps.value ? "shrink" : ""} `}
          >
            {label}
          </label>
        )}
        {inputProps.name === name && (
          <label className="error-label">{errorMessage}</label>
        )}
      </div>
    );
  }
}
export default FormInput;

export class ErrorLabel extends Component {
  render() {
    const {errorLabel} = this.props;
    return <label className="error-label">{errorLabel}</label>;
  }
}
// constructor(props) {
//   super(props);
//   this.props = props;
// }

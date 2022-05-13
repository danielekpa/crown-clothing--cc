import React, { Component } from "react";
import "./form-input.styles.scss";

export class FormInput extends Component {
  render() {
    const { label, ...inputOptions } = this.props;
    return (
      <div className="group">
        <input className="form-input" {...inputOptions} />
        {label && (
          <label
            className={`form-input-label ${inputOptions.value.length ? "shrink" : ""
              } `}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
}

export default FormInput;

// constructor(props) {
//   super(props);
//   this.props = props;
// }

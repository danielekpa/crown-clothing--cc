import React, { Component } from 'react'
import './button.styles.scss'

/*
 Wee have three buttons
- Default Button
- Inverted Button
- Google sign in button
*/
const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

export class Button extends Component {
  render() {
    const { children, buttonType, ...otherProps } = this.props
    return (
      <button className={`button ${BUTTON_TYPE_CLASSES[buttonType] ? BUTTON_TYPE_CLASSES[buttonType] : buttonType}`} {...otherProps}>
        {children}
      </button>
    )
  }
}

export default Button
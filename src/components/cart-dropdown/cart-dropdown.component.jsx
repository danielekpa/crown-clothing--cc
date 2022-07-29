import React, {Component} from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

export class CartDropdown extends Component {
  render() {
    return (
      <div className="cart-dropdown-container">
        <div className="cart-items" />
        <Button>Go TO CHECKOUT</Button>
      </div>
    );
  }
}

export default CartDropdown;

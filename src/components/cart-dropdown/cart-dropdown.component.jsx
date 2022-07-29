import React, {Component} from "react";
import {CartContext} from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

export class CartDropdown extends Component {
  render() {
    const {cartItems} = this.context;
    return (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem cartItem={item} key={item.id} />
          ))}
        </div>
        <Button>Go TO CHECKOUT</Button>
      </div>
    );
  }
}

CartDropdown.contextType = CartContext;
export default CartDropdown;

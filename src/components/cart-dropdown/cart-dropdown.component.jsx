import React, {Component} from "react";
import {Link} from "react-router-dom";
import {CartContext} from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

export class CartDropdown extends Component {
  render() {
    const {cartItems, toggleIsCartOpen} = this.context;
    return (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem cartItem={item} key={item.id} />
          ))}
        </div>
        <Link to="/checkout">
          <Button onClick={toggleIsCartOpen}>Go TO CHECKOUT</Button>
        </Link>
      </div>
    );
  }
}

CartDropdown.contextType = CartContext;
export default CartDropdown;

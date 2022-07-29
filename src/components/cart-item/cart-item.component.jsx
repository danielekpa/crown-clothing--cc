import React, {Component} from "react";
import "./cart-item.styles.scss";

export class CartItem extends Component {
  render() {
    const {cartItem} = this.props;
    return (
      <div className="cart-item-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
        <div className="item-details">
          <span className="name">{cartItem.name}</span>
          <span className="price">
            {cartItem.quantity} x ${cartItem.price}
          </span>
        </div>
      </div>
    );
  }
}

export default CartItem;

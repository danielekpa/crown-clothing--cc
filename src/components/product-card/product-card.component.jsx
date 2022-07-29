import React, {Component} from "react";
import {CartContext} from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

export class ProductCard extends Component {
  render() {
    const {name, price, imageUrl} = this.props.product;
    const {addItemToCart} = this.context;

    return (
      <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button
          buttonType="inverted"
          onClick={() => addItemToCart(this.props.product)}
        >
          Add to card
        </Button>
      </div>
    );
  }
}
ProductCard.contextType = CartContext;
export default ProductCard;

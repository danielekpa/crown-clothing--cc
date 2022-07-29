import React, {Component} from "react";
import ProductCard from "../../components/product-card/product-card.component";
import {ProductsContext} from "../../contexts/products.context";
import "./shop.styles.scss";

class Shop extends Component {
  componentDidMount() {
    // console.log("I don land");
  }
  render() {
    return (
      <div className="products-container">
        {this.context.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
Shop.contextType = ProductsContext;
export default Shop;

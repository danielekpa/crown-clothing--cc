import React, {Component} from "react";
import ProductCard from "../../components/product-card/product-card.component";
import {CategoriesContext} from "../../contexts/categories.context";

import "./shop-category.styles.scss";

export default class ShopCategory extends Component {
  render() {
    const {category} = this.props.match.params;
    const {categoriesMap} = this.context;
    return (
      <div className="shop-category">
        <h2 className="title">{category.toUpperCase()}</h2>
        <div className="shop-category-container">
          {categoriesMap[category]?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

ShopCategory.contextType = CategoriesContext;

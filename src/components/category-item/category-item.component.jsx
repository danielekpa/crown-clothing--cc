import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./category-item.styles.scss";

export default class CategoryItem extends Component {
  render() {
    const {title, imageUrl} = this.props.category;

    return (
      <div className="category-item-container">
        <div
          className="background-image"
          style={{backgroundImage: `url(${imageUrl}.default)`}}
        />
        {/* <img /> */}
        <Link className="body-container" to={`shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    );
  }
}

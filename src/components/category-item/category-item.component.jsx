import React, { Component } from 'react';
import './category-item.styles.scss'

export default class CategoryItem extends Component {
  render() {
    const { title, imageUrl } = this.props.category;

    return (
      <div className="category-container" >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl}.default)` }}
        />
        {/* <img /> */}
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { CATEGORIES } from '../../customData.js';
import CategoryItem from '../category-item/category-item.component';
import "./categories.styles.scss";


export default class Categories extends Component {
  render() {
    return (
      <div className="categories-container">
        {CATEGORIES.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss'

export default class CategoryPreview extends Component {
  render() {
    const { title, products, path } = this.props;
    // console.log(match, location);
    return (
      <div className='category-preview-container'>
        <h2>
          <Link className='title' to={`${path}/${title}`}>{title.toUpperCase()}</Link>
        </h2>
        <div className='preview'>
          {products.filter((_, index) => index < 4).map((product) => (
            <ProductCard key={product.id} product={product} />)
          )}
        </div>
      </div>
    )
  }
}

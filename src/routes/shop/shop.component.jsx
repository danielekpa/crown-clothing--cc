import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {CategoriesContext} from "../../contexts/categories.context";
import ShopCategory from "../shop-category/shop-category.component";
import "./shop.styles.scss";

class Shop extends Component {
  componentDidMount() {}

  renderCategoryPreview = (productCategory) => {};
  render() {
    const {match} = this.props;
    const {categoriesMap} = this.context;

    return (
      <Switch>
        <Route exact path={match.path}>
          {Object.keys(categoriesMap).map((title) => {
            return (
              <CategoryPreview
                path={match.path}
                key={title}
                title={title}
                products={categoriesMap[title]}
              />
            );
          })}
        </Route>
        <Route path={`${match.path}/:category`} component={ShopCategory} />
      </Switch>
    );
  }
}

Shop.contextType = CategoriesContext;
export default Shop;

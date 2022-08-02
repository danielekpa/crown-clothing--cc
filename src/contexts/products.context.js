import { Component, createContext } from "react";
import PRODUCTS from "../constants/shop-data.json";

// as the actual value to access
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export class ProductsContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: PRODUCTS,
    }
  }

  componentDidMount() {
  }

  render() {
    const { children } = this.props;
    const { products } = this.state;
    const value = { products };
    return <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  }
} 
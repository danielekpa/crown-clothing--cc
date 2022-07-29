import React, { Component, createContext } from 'react'

export const CartContext = createContext();
class CartContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      cartCount: 0,
      isCartOpen: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { cartItems } = this.state;
    if (prevState.cartItems !== this.state.cartItems) {
      this.setState({ cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0) })
    }
  }

  toggleIsCartOpen = () => {
    this.setState((prevState) => ({ isCartOpen: !prevState.isCartOpen }))
  }

  addItemToCart = (product) => {
    const { cartItems } = this.state;
    if (cartItems.find(item => item.id === product.id)) {
      this.setState({ cartItems: cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) })
      return
    }
    this.setState((prevState) => ({ cartItems: [...prevState.cartItems, { ...product, quantity: 1 }] }))
  }

  render() {
    const { children } = this.props;
    const { cartItems, cartCount, isCartOpen } = this.state;
    const { toggleIsCartOpen, addItemToCart } = this;
    return (
      <CartContext.Provider value={{ cartItems, cartCount, isCartOpen, toggleIsCartOpen, addItemToCart }}>{children}</CartContext.Provider>
    )
  }
}

export default CartContextProvider
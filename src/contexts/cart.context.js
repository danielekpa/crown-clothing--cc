import React, { Component, createContext } from 'react'

export const CartContext = createContext();
class CartContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      isCartOpen: false,
    }
  }
  toggleIsCartOpen = () => {
    this.setState((prevState) => ({ isCartOpen: !prevState.isCartOpen }))
  }
  render() {
    const { children } = this.props;
    const { cartItems, isCartOpen } = this.state;
    const { toggleIsCartOpen } = this;
    return (
      <CartContext.Provider value={{ cartItems, isCartOpen, toggleIsCartOpen }}>{children}</CartContext.Provider>
    )
  }
}

export default CartContextProvider
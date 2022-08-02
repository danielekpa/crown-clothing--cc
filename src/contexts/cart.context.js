import React, { Component, createContext } from 'react'

export const CartContext = createContext();
class CartContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      cartCount: 0,
      cartTotal: 0,
      isCartOpen: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { cartItems } = this.state;
    if (prevState.cartItems !== this.state.cartItems) {
      this.setState({ cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0) })
      this.setState({ cartTotal: cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0) })
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

  removeItemFromCart = (product) => {
    const { cartItems } = this.state;
    if (cartItems.find(item => item.id === product.id)) {
      if (product.quantity === 1) {
        this.setState({ cartItems: cartItems.filter(item => item.id !== product.id) })
        return
      }
      this.setState({ cartItems: cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item) })
    }
    // this.setState((prevState) => ({ cartItems: [...prevState.cartItems, { ...product, quantity: 1 }] }))
  }

  clearItemFromCart = (product) => {
    const { cartItems } = this.state;
    this.setState({ cartItems: cartItems.filter(item => item.id !== product.id) })
  }
  render() {
    const { children } = this.props;
    const { cartItems, cartCount, cartTotal, isCartOpen } = this.state;
    const { toggleIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart } = this;
    return (
      <CartContext.Provider value={{ cartItems, cartCount, cartTotal, isCartOpen, toggleIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart }}>{children}</CartContext.Provider>
    )
  }
}

export default CartContextProvider
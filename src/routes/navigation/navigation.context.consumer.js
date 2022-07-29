import React from 'react'
import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'
import Navigation from './navigation.component'

function NavigationContextConsumer() {
  return (
    <UserContext.Consumer>
      {user => (
        <CartContext.Consumer>
          {cart => (
            <Navigation user={user} cart={cart} />)}
        </CartContext.Consumer>
      )}
    </UserContext.Consumer>
  )
}

export default NavigationContextConsumer
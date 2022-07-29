import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import "./navigation.styles.scss";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";
import {signOutUSer} from "../../utils/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

export default class Navigation extends Component {
  signOutHandler = async () => {
    await signOutUSer();
  };

  render() {
    const {user, cart} = this.props;
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrownLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            {user.currentUser ? (
              <span className="nav-link" onClick={signOutUSer}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/auth/">
                Sign In
              </Link>
            )}
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
            <CartIcon />
          </div>
          {cart.isCartOpen && <CartDropdown />}
        </div>
      </Fragment>
    );
  }
}

import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import "./navigation.styles.scss";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";

export default class Navigation extends Component {
  render() {
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
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

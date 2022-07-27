import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import "./navigation.styles.scss";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";
import {UserContext} from "../../contexts/user.context";
import {signOutUSer} from "../../utils/firebase.util";

export default class Navigation extends Component {
  signOutHandler = async () => {
    await signOutUSer();
  };

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
            {this.context.currentUser ? (
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
            {/* <Link to={location => ({ ...location, pathname: "/courses" })} >
              Test1
            </Link> */}
            {/* <Link to={location => `${location.pathname}?sort=name`}>
              Test 2
            </Link> */}
          </div>
        </div>
      </Fragment>
    );
  }
}
Navigation.contextType = UserContext;

import React, {Component, Fragment} from "react";
import {Route, Redirect, Switch, withRouter} from "react-router";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/authentication/sign-in/sign-in.component";
import SignUp from "./routes/authentication/sign-up/sign-up.component";
import Shop from "./routes/shop/shop.component";
import NavigationContextConsumer from "./routes/navigation/navigation.context.consumer";
import Checkout from "./routes/checkout/checkout.component";

class App extends Component {
  render() {
    const redirectPath = "/auth/sign-in";
    const {location} = this.props;
    return (
      <Fragment>
        <NavigationContextConsumer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" render={() => <Shop />} />
          <Route exact path="/auth">
            <Redirect to={`${location.pathname}sign-in`} />
          </Route>
          <Route exact path={redirectPath} component={SignIn} />
          <Route exact path="/auth/sign-up" component={SignUp} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Fragment>
      // {<Link to={location => ({ ...location, pathname: "/courses" })} >
      //         Test1
      //       </Link>
      //       <Link to={location => `${location.pathname}?sort=name`}>
      //         Test 2
      //       </Link>}
    );
  }
}

// export default App;
const AppWithRouter = withRouter(App);
export default AppWithRouter;

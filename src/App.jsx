import React, { Component, Fragment } from "react";
import { Switch } from "react-router";
import Home from "./routes/home/home.component";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Navigation from "./routes/navigation/navigation.component";
import { Route, Redirect } from "react-router";
import SignIn from "./routes/authentication/sign-in/sign-in.component";
import SignUp from "./routes/authentication/sign-up/sign-up.component";
import Authentication from "./routes/authentication/authentication.component";
import routeAuthentication from "./routes/authentication/authentication.component";

class App extends Component {
  render() {
    const redirectPath = '/auth/sign-in';
    const { location } = this.props;
    return (
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" render={() => <Shop />} />
          <Route exact path="/auth" >
            <Redirect to={`${location.pathname}sign-in`} />
          </Route>
          <Route exact path={redirectPath} component={SignIn} />
          <Route exact path="/auth/sign-up" component={SignUp} />
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

class Shop extends Component {
  componentDidMount() {
    console.log("I don land");
  }
  render() {
    return <h1>The Shop Page.</h1>;
  }
}

// export default App;
const AppWithRouter = withRouter(App);
export default AppWithRouter;

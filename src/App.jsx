import React, {Component, Fragment} from "react";
import {Switch} from "react-router";
import Home from "./routes/home/home.component";
import PropTypes from "prop-types";
// import {withRouter} from "react-router";
import Navigation from "./routes/navigation/navigation.component";
import {Route} from "react-router";
import SignIn from "./routes/sign-in/sign-in.component";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" render={() => <Shop />} />
          <Route exact path="/sign-in" component={SignIn} />
        </Switch>
      </Fragment>
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

export default App;

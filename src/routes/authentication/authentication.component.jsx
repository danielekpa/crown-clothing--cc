import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

// A simple component that shows the pathname of the current location
export default function Authentication() {
  return (<Fragment></Fragment>)
}

// const routeAuthentication = withRouter(Authentication);
// routeAuthentication


// <Redirect to={history => ({ ...history, pathname: "/sign-in" })} />
{/* <div>You are now at { }</div> */ }
{/* <Redirect to="/auth/sign-in" ></Redirect>
       */}

{/* <Redirect
        to={{
          pathname: "/login",
          state: { from: location }
        }}
      /> */}
  // {handleClick()}
// return (<Fragment><Redirect to="/authenticate/"></Redirect></Fragment>)


/*  let history = useHistory();
 console.log(history);

 function handleClick() {
   history.push("/sign-in");
 } */
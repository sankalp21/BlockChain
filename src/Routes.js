import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import BlockChainDemo from "./BlockChainDemo";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={BlockChainDemo}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

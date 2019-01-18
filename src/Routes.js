import React from "react";
import { Route, Switch } from "react-router-dom";


// import HomePage from "./pages/HomePage";
import FirstPage from "./pages/FirstPage"
import BudgetPage from "./pages/BudgetPage";
import SavingPage from "./pages/SavingPage";
import OfferPage from "./pages/OfferPage";
import TaggingPage from "./pages/TaggingPage";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={BudgetPage} />
        <Route exact path="/saving" component={SavingPage} />
        <Route exact path="/budget" component={BudgetPage} />
        <Route exact path="/offer" component={OfferPage} />
        <Route exact path="/tag" component={TaggingPage} />
        <Route exact path="/main" component={FirstPage} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;

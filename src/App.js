import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./Components/Pages/Home";
import Articles from "./Components/Pages/Articles";
import SignIn from "./Components/Pages/SignIn";
import Header from './Components/Header';
import "antd/dist/antd.css";
import Signup from './Components/Pages/signup';

const App = () => {

  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" >
        <Header />
          <Home />
        </Route>
        <Route path="/articles" >
          <Header />
          <Articles />
        </Route>
        <Route path="/sign" component={SignIn} > 
          <SignIn />
        </Route>
        <Route path="/create-account" component={Signup} > 
          <Signup/>
        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App;
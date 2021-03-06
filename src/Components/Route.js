import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import Cart from "./Pages/Cart";
import OrderHistory from "./Pages/OrderHistory";
import SignIn from "./Pages/SignIn";

const Body =()=>{
return(
   <Switch>
       <Route  exact path ="/" component={Home}/>
       <Route  path ="/articles" component={Articles}/>
       <Route  path ="/cart" component={Cart}/>
       <Route  path ="/orderhistory" component={OrderHistory}/>
       <Route  path ="/sign" component={SignIn}/> 

   </Switch>
)
}

export default Body;
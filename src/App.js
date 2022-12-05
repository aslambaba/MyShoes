import React from 'react';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import Page404 from './Components/Page404';
import Productitem from './Components/Productitem';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  

  return (
    <div className="App">
      < Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Products' component={Products}></Route>
          <Route path='/Products/productitems/:name' component={Productitem}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='*' component={Page404}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

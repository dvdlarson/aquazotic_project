import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';


import Administration from "./components/pages/Administration";
import Contact from "./components/pages/ContactUs";
import FishGallery from "./components/pages/FishGallery";
import Inventory from "./components/pages/Inventory";
import Products from "./components/pages/Products";
import Relaxation from "./components/pages/Relaxation";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

import Newsletter from "./components/pages/Newsletter";
import Search from "./components/pages/Search";



import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/relaxation" component={Relaxation} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/inventory" component={Inventory} />
        <Route path="/fishgallery" component={FishGallery} />
        <Route path="/administration" component={Administration} />
        <Route path="/login" component={Login} />
        <Route path="/newsletter" component={Newsletter} />
        <Route path="/search" component={Search} />
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));

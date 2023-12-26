import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Categories from './views/Categories';
import Products from './views/Products';
import ProductCreate from './views/ProductCreate';
import ProductEdit from './views/ProductEdit';
import CartDetail from './views/CartDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/productos/create" component={ProductCreate} />
        <Route path="/productos/edit/:id" component={ProductEdit} />
        <Route path="/productos/:id" component={Products} />
        <Route path="/categories" component={Categories} />
        <Route path="/cart-detail" component={CartDetail} />
      </Switch>
    </Router>
  );
};

export default App;

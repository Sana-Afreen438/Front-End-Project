import React, { Fragment } from 'react';
import { Router, Route, useHistory } from 'react-router-dom';
import ProductsPage from './Products';
import HomePage from './HomePage';
import SignIn from './SignIn';
import AddProductsPage from './AddProductsPage';
import UserContext, {useUserContext} from './userContext';

export default function MainComponent() {

  const { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin } = useUserContext();
  const history = useHistory();

  function checkCredentials(credentialsForm) {
    if (credentialsForm['userName'] === 'admin' && credentialsForm['password'] === 'password') {
      setIsLoggedIn(true);
      setIsAdmin(true);
      history.push('/products');
    }
    else if (credentialsForm['userName'] === 'user' && credentialsForm['password'] === 'password') {
      setIsLoggedIn(true);
      history.push('/products');
    }
    else {
      alert("Enter valid credentials..!");
    }
  }

  return (
    <Fragment>
      <UserContext>
        <Router>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/auth" render={() => <SignIn
            checkCredentials={(credentialsForm) => checkCredentials(credentialsForm)} />} />

          <Route exact path="/products" component={ProductsPage} />

          <Route exact path="/add-products" component={AddProductsPage} />

        </Router>
      </UserContext>
    </Fragment>

  );
}
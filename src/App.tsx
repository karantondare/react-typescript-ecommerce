import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components/header/header.component';
import { Authenticaion } from './pages/authentication/authenticaion.component';
import { Homepage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { auth } from './firebase/firebase.utils';
import './App.css';

export interface UserState {
  displayName: null | undefined | string;
  email: null | undefined | string;
  phoneNumber: null | undefined | number | string;
  photoURL: null | undefined | string;
  uid: null | undefined | string;
}

function App() {
  const [user, setUser] = useState<any>({
    displayName: '',
    email: '',
    phoneNumber: null,
    photoURL: '',
    uid: '',
  });

  let unsubscribeFromAuth: () => void = () => {};

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [user]);

  useEffect(() => {
    unsubscribeFromAuth();
  }, [user]);

  return (
    <div>
      <Header currentUser={user} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/authentication' component={Authenticaion} />
      </Switch>
    </div>
  );
}

export default App;

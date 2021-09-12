import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components/header/header.component';
import { Authenticaion } from './pages/authentication/authenticaion.component';
import { Homepage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { auth } from './firebase/firebase.utils';
import './App.css';

export interface UserState {
  displayName: string;
  email: string;
  phoneNumber: null | number;
  photoURL: string;
  providerId: string;
  uid: string;
}

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user);

      console.log(user);
    });

    unsubscribeFromAuth();
  }, []);

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

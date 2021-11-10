import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navigation from '../components/Navigation';
import Routes from '../routes';
import SignIn from '../views/SignIn';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.profileImage,
          uid: authed.uid,
          user: authed.email.split('@'[0]),
          isAdmin: process.env.REACT_APP_ADMIN_UID === authed.uid,
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div>
      <Navigation user={user} />
      {user ? <Routes user={user} /> : <SignIn user={user} />}
    </div>
  );
}

export default Initialize;

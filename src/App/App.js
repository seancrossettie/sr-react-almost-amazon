import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Header from '../components/Header';
import Routes from '../helpers/Router';
import { getAuthors } from '../helpers/data/authorData';

function App() {
  const [authors, setAuthors] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
        <Header user={user} />
        <Routes authors={authors} setAuthors={setAuthors} />
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.scss';
import firebase from 'firebase';
import firebaseConfig from './data/apiKeys';
import AuthorForm from './components/AuthorForm';
import { getAuthors } from './data/authorData';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);

  console.warn(authors);

  useEffect(() => {
    getAuthors().then((resp) => setAuthors(resp));
  }, []);

  return (
    <div className='App'>
      <AuthorForm />
    </div>
  );
}

export default App;

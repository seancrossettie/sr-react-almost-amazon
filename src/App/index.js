import React from 'react';
import './App.scss';
import firebase from 'firebase';
import firebaseConfig from './data/apiKeys';
import AuthorForm from './components/AuthorForm';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div className='App'>
      <AuthorForm />
    </div>
  );
}

export default App;

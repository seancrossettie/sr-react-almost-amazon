import React, { useEffect, useState } from 'react';
import './App.scss';
import firebase from 'firebase';
import firebaseConfig from './data/apiKeys';
import AuthorForm from './components/AuthorForm';
import { getAuthors } from './data/authorData';
import AuthorCard from './components/AuthorCard';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((resp) => setAuthors(resp));
  }, []);

  return (
    <div className='App'>
      <AuthorForm
      formTitle='Add an Author'
      setAuthors={setAuthors}
      />
      {authors.map((authorInfo) => (
        <AuthorCard
          key={authorInfo.firebaseKey}
          {...authorInfo}
          setAuthors={setAuthors}
        />
      ))}
    </div>
  );
}

export default App;

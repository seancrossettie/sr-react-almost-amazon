import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import firebaseConfig from '../helpers/data/apiKeys';
import AuthorCard from '../components/AuthorCard';

firebase.initializeApp(firebaseConfig);

function Authors({ authors, setAuthors }) {
  return (
    <div className='App'>
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

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Authors;

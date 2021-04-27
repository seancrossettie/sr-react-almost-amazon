import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addAuthor, updateAuthor } from '../data/authorData';

const AuthorForm = ({
  formTitle,
  setAuthors,
  name,
  email,
  firebaseKey
}) => {
  const [author, setAuthor] = useState({
    name: name || '',
    email: email || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      updateAuthor(author)
        .then((arr) => setAuthors(arr));
    } else {
      addAuthor(author)
        .then((array) => setAuthors(array));
    }
  };

  return (
    <>
      <div className='add-author-form'>
        <form
          id='add-author-form'
          autoComplete='off'
          className='form-label'
          onSubmit={handleSubmit}
        >
        <h2>{formTitle}</h2>
        <label>Name: </label>
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={author.name}
          onChange={handleInputChange}
          required
          ></input>
          <label>Email: </label>
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={author.email}
          onChange={handleInputChange}
          required
          ></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default AuthorForm;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addAuthor } from '../data/authorData';

export default function AuthorForm({ formTitle }) {
  const [author, setAuthor] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    addAuthor(author);
  };

  return (
    <>
      <div className='add-author-form'>
        <form
          id='add-author-form'
          autoComplete='off'
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
}

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired
};

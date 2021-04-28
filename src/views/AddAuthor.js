import React from 'react';
import PropTypes from 'prop-types';
import AuthorForm from '../components/AuthorForm';

function AddAuthor({ setAuthors }) {
  return (
    <>
      <AuthorForm
        formTitle='Add an Author'
        setAuthors={setAuthors}
      />
    </>
  );
}

AddAuthor.propTypes = {
  setAuthors: PropTypes.func.isRequired
};

export default AddAuthor;

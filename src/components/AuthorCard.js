import React, { useState } from 'react';
import {
  Card, Button, CardTitle, CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../helpers/data/authorData';
import AuthorForm from './AuthorForm';

const AuthorCard = ({
  firebaseKey,
  name,
  email,
  setAuthors,
}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(firebaseKey)
          .then((array) => setAuthors(array));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('Nothing is selected!');
    }
  };

  return (
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{email}</CardText>
        <Button color="primary" onClick={() => handleClick('edit')}>
          {editing ? 'Close Form' : 'Edit Student'}
        </Button>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Author</Button>
        {editing && <AuthorForm
          formTitle='Edit Student'
          name={name}
          email={email}
          firebaseKey={firebaseKey}
          setAuthors={setAuthors}
        />}
    </Card>
  );
};

AuthorCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setAuthors: PropTypes.func,
  firebaseKey: PropTypes.string.isRequired,
};

export default AuthorCard;

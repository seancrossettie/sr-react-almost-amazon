import React from 'react';
import {
  Card, Button, CardTitle, CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../data/authorData';

const AuthorCard = ({
  name,
  email,
  setAuthors,
  firebaseKey
}) => {
  const handleClick = () => {
    deleteAuthor(firebaseKey)
      .then((array) => setAuthors(array));
  };

  return (
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{email}</CardText>
        <Button color="danger" onClick={handleClick}>Delete Author</Button>
    </Card>
  );
};

AuthorCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setAuthors: PropTypes.func.isRequired,
  firebaseKey: PropTypes.string.isRequired
};

export default AuthorCard;

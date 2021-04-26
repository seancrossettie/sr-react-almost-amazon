import React from 'react';
import {
  Card, Button, CardTitle, CardText
} from 'reactstrap';
import PropTypes from 'prop-types';

const AuthorCard = ({
  name,
  email,
  handleClick
}) => (
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{email}</CardText>
        <Button onClick={handleClick}>Print Author to Console</Button>
    </Card>
);

AuthorCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default AuthorCard;

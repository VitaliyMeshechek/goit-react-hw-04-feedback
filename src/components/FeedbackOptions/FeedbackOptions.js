import { nanoid } from 'nanoid'
import React from "react";
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';


export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <Container>
      {options.map(option => (
     <Button key={nanoid()} type="button" name={option} onClick={(option)=> onLeaveFeedback(option)}>{option}</Button>
     ))}
     </Container>
  );
};

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

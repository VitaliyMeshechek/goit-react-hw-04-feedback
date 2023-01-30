import PropTypes from 'prop-types';
import { Container, Response } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positiveFidback}) => {
   return <Container>
    <Response>Good: {good}</Response>
    <Response>Neutral: {neutral}</Response>
    <Response>Bad: {bad}</Response>
    <Response>Total: {total}</Response>
    <Response>Positive fidback: {positiveFidback} %</Response>
   </Container>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
	positiveFidback: PropTypes.number.isRequired
}


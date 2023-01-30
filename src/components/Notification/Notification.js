import React from 'react';
import PropTypes from 'prop-types';
import { Container, Notific } from './Notification.styled';


export const Notification = ({ message }) => {
	return (
		<Container>
			<Notific>{message}</Notific>
		</Container>
	);
};
Notification.propTypes = {
	message: PropTypes.string.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

const containerStyles = {
	position: 'relative',
};

const styles = {
	alignItems: 'center',
	justifyContent: 'center',
	display: 'flex',
	position: 'fixed',
	zIndex: 1,
	left: 0,
	top: 0,
	right: 0,
	bottom: 0,
	overflow: 'auto',
	backgroundColor: 'rgba(0, 0, 0, 0.4)',
};

const buttonStyles = {
	position: 'absolute',
	right: 0,
	top: 0,
	zIndex: 2,
};

export const CloseButton = ({ hideModal }) => (
	<button type="button" style={buttonStyles} onClick={hideModal}>
		x
	</button>
);

const CompanyModal = ({ children, show, hideModal }) => (
	<Modal
		aria-labelledby="simple-modal-title"
		aria-describedby="simple-modal-description"
		open={show}
		style={styles}
		BackdropProps={{
			timeout: 500,
		}}
		onClose={hideModal}
	>
		<Paper style={containerStyles} elevation={3}>
			<Container maxWidth="md">
				<CloseButton hideModal={hideModal} />
				{children}
			</Container>
		</Paper>
	</Modal>
);

CompanyModal.propTypes = {
	children: PropTypes.node,
	show: PropTypes.bool,
	hideModal: PropTypes.func,
};

export default CompanyModal;

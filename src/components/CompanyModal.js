import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

import styled from 'styled-components';

const ModalWrapper = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.4);

	.Modal__container {
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		right: 0;
		position: absolute;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.Modal__container--inner {
		background-color: white;
		position: relative;
	}

	.Modal__button {
		position: absolute;
		right: 0;
		top: 0;
	}
`;

export const CloseButton = ({ hideModal }) => (
	<button className="Modal__button" onClick={hideModal}>
		X
	</button>
);

const CompanyModal = ({ children, show, hideModal }) =>
	show ? (
		<ModalWrapper>
			<div className="Modal__container" onClick={hideModal}>
				<Container maxWidth="md">
					<div className="Modal__container--inner">
						<CloseButton hideModal={hideModal} />
						{children}
					</div>
				</Container>
			</div>
		</ModalWrapper>
	) : null;

CompanyModal.propTypes = {
	children: PropTypes.node,
	show: PropTypes.bool,
	hideModal: PropTypes.func,
};

export default CompanyModal;

import React from 'react';
import { truncate } from 'lodash';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Wrapper = styled.button`
	border: none;
	appearance: none;
	padding: 0;
	text-align: left;

	&.is-selected {
		background-color: lightpink;
		.CompanyItem__Card {
			background-color: lightpink;
		}
	}
	.CompanyItem__Card {
		display: flex;
	}
	.CompanyItem__Card-img {
		margin-right: 10px;

		img {
			max-width: 80px;
			width: 100%;
		}
	}
`;

const CompanyStaffListItem = ({ employee, showModal, select }) => (
	<Wrapper onClick={showModal} className={select}>
		<Paper p={3}>
			<Card>
				<CardContent className="CompanyItem__Card">
					<Box className="CompanyItem__Card-img">
						<img src={employee.avatar} alt="Avatar" />
					</Box>

					<div className="CompanyItem__Card-info">
						<Typography component="p" gutterBottom>
							{employee.firstName} {employee.lastName}
						</Typography>
						<Typography component="p" gutterBottom>
							{truncate(employee.bio, { length: 90, separator: ' ' })}
						</Typography>
					</div>
				</CardContent>
			</Card>
		</Paper>
	</Wrapper>
);

CompanyStaffListItem.propTypes = {
	employee: PropTypes.shape({
		avatar: PropTypes.string,
		lastName: PropTypes.string,
		firstName: PropTypes.string,
		jobTitle: PropTypes.string,
		bio: PropTypes.string,
	}),
};
export default CompanyStaffListItem;

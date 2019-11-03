import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { formatDateTimeToLocale } from '../utils/helper';

import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	position: relative;
	.Company__modal-card {
		display: flex;
		position: relative;
	}

	.Company__modal-img {
		width: 100%;

		@media only screen and (min-width: 600px) {
			max-width: 200px;
		}
	}
`;

const EmpolyeeInfo = ({ employee }) => (
	<Wrapper>
		<CardContent>
			<img src={employee.avatar} alt={employee.lastName} className="employee__modal-img" />

			<Typography component="p" gutterBottom>
				<b>{employee.jobTitle}</b>
			</Typography>
			<Typography component="p" gutterBottom>
				{employee.age}
			</Typography>
			<Typography component="p" gutterBottom>
				{formatDateTimeToLocale(employee.dateJoined)}
			</Typography>
		</CardContent>

		<CardContent>
			<Typography component="h1" variant="h3" gutterBottom>
				{employee.lastName} {employee.firstName}
			</Typography>
			<hr />
			<Typography component="p" gutterBottom>
				{employee.bio}
			</Typography>
		</CardContent>
	</Wrapper>
);

EmpolyeeInfo.propTypes = {
	employee: PropTypes.shape({
		avatar: PropTypes.string,
		lastName: PropTypes.string,
		firstName: PropTypes.string,
		jobTitle: PropTypes.string,
		bio: PropTypes.string,
		dateJoined: PropTypes.string,
		age: PropTypes.number,
	}),
};

export default EmpolyeeInfo;

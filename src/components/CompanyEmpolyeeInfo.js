import React from 'react';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Moment from 'react-moment';

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
				<Moment format="YYYY" date={employee.dateJoined} />
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

export default EmpolyeeInfo;

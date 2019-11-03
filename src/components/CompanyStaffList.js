import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import CompanyStaffListItem from './CompanyStaffListItem';

const CompanyStaffList = ({ employees, showModal }) => (
	<Grid container spacing={3}>
		{employees &&
			employees.map(employee => (
				<Grid item xs={12} sm={4} key={employee.id}>
					<CompanyStaffListItem employee={employee} showModal={() => showModal(employee.id)} />
				</Grid>
			))}
	</Grid>
);

CompanyStaffList.propTypes = {
	showModal: PropTypes.func,
	employees: PropTypes.array,
};

export default CompanyStaffList;

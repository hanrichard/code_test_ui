import React from 'react';
import Grid from '@material-ui/core/Grid';

import CompanyStaffListItem from './CompanyStaffListItem';

const CompanyStaffList = ({ employees, showModal, employee }) => (
	<Grid container spacing={3}>
		{employees &&
			employees.map(employee => (
				<Grid item xs={12} sm={4} key={employee.id}>
					<CompanyStaffListItem
						employee={employee}
						showModal={() => showModal(employee.id)}
						isSelected={employee.id === employee.id}
					/>
				</Grid>
			))}
	</Grid>
);

export default CompanyStaffList;

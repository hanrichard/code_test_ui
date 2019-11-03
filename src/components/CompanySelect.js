import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

const CompanySelect = ({ value, sortOptions, onChange }) => (
	<TextField
		id="outlined-select-currency"
		select
		label="Sort"
		value={value}
		onChange={onChange}
		helperText="Sort by"
		margin="normal"
		variant="outlined"
	>
		{sortOptions.map(option => (
			<MenuItem key={option.value} value={option.value}>
				{option.label}
			</MenuItem>
		))}
	</TextField>
);

CompanySelect.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
};

export default CompanySelect;

import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const CompanySearch = ({ value, onChange }) => (
	<form>
		<TextField
			id="outlined-search"
			label="Search field"
			margin="normal"
			variant="outlined"
			value={value}
			onChange={onChange}
			helperText="Search field"
		/>
	</form>
);

CompanySearch.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
};
export default CompanySearch;

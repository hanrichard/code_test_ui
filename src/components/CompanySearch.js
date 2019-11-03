import React from 'react';
import TextField from '@material-ui/core/TextField';

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

export default CompanySearch;

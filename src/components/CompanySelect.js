import React from 'react';

const CompanySelect = ({ value, sortOptions, onChange }) => (
	<select value={value} onChange={onChange}>
		{sortOptions.map(option => {
			return (
				<option value={option.value} key={option.value}>
					{option.label}
				</option>
			);
		})}
	</select>
);

export default CompanySelect;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CompanySelect from './CompanySelect';
import CompanySearch from './CompanySearch';

class CompanyPanel extends Component {
	render() {
		const { term, onChangeInput, onChangeSelect } = this.props;

		const sortOptions = [
			{
				value: 'lastName',
				label: 'Last Name',
			},
			{
				value: 'firstName',
				label: 'First Name',
			},
		];

		return (
			<div>
				<h3>Our Employees</h3>
				<div>
					<span>
						Sort by:
						<CompanySelect sortOptions={sortOptions} onChange={onChangeSelect} />
					</span>
					<span>
						Search:
						<CompanySearch value={term} onChange={onChangeInput} />
					</span>
				</div>
			</div>
		);
	}
}
export default CompanyPanel;

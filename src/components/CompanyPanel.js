import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CompanySelect from './CompanySelect';
import CompanySearch from './CompanySearch';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Wrapper = styled.div`
	.Company__panel {
		margin-bottom: 30px;

		@media only screen and (min-width: 600px) {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.Company__panel-sortandsearch {
		display: flex;
	}
	.Company__panel-sort {
		margin-right: 10px;
	}
`;

class CompanyPanel extends Component {
	render() {
		const { onChangeInput, onChangeSelect, searchValue, selectValue } = this.props;

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
			<Wrapper>
				<div className="Company__panel">
					<div className="Company__panel-heading">
						<Typography variant="h4" component="h2" gutterBottom>
							Our Employees
						</Typography>
					</div>
					<div className="Company__panel-sortandsearch">
						<div className="Company__panel-sort">
							<CompanySelect sortOptions={sortOptions} value={selectValue} onChange={onChangeSelect} />
						</div>
						<div className="Company__panel-search">
							<span>
								<CompanySearch value={searchValue} onChange={onChangeInput} />
							</span>
						</div>
					</div>
				</div>
			</Wrapper>
		);
	}
}

CompanyPanel.propTypes = {
	onChangeInput: PropTypes.func,
	onChangeSelect: PropTypes.func,
	searchValue: PropTypes.string,
	selectValue: PropTypes.string,
};
export default CompanyPanel;

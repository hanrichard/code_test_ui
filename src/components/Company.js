import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Companyheader from './CompanyHeader';
import CompanyPanel from './CompanyPanel';

import CircularProgress from '@material-ui/core/CircularProgress';

class Company extends Component {
	constructor(props) {
		super(props);
		this.state = {
			companyInfo: null,
			show: false,
			staff: {},
			term: '',
		};
	}

	onChangeHandler = e => {
		const inputValue = e.target.value;
		this.setState({
			term: inputValue,
		});
	};

	componentDidMount() {
		this.props.onInitCompanies();
	}

	render() {
		const { companies, employees } = this.props;
		const { term } = this.state;

		return companies.length === 0 ? (
			<CircularProgress />
		) : (
			<div className="Company__container">
				<Companyheader info={companies.companyInfo} />
				<div className="Company__container">
					<CompanyPanel onChangeInput={this.onChangeHandler} searchValue={term} />
				</div>
				<div className="Company__card">cards</div>
				<div className="Company__modal">modal</div>
			</div>
		);
	}
}

Company.propTypes = {
	onInitCompanies: PropTypes.func,
};

export default Company;

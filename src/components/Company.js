import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Companyheader from './CompanyHeader';
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

	componentDidMount() {
		this.props.onInitCompanies();
	}

	render() {
		const { companies, employees } = this.props;

		return companies.length === 0 ? (
			<CircularProgress />
		) : (
			<div className="Company__container">
				<Companyheader info={companies.companyInfo} />
				<div className="Company__container">panel</div>
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

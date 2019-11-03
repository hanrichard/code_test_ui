import React, { Component } from 'react';
import Fuse from 'fuse.js';

import PropTypes from 'prop-types';
import Companyheader from './CompanyHeader';
import CompanyPanel from './CompanyPanel';
import CompanyStaffList from './CompanyStaffList';
import CompanyModal from './CompanyModal';
import CompanyEmpolyeeInfo from './CompanyEmpolyeeInfo';
import Container from '@material-ui/core/Container';

import CircularProgress from '@material-ui/core/CircularProgress';

class Company extends Component {
	constructor(props) {
		super(props);
		this.state = {
			companyInfo: null,
			show: false,
			employee: {},
			term: '',
			select: 'lastName',
		};
	}

	onChangeInput = e => {
		this.setState({
			term: e.target.value,
		});
	};

	onChangeSelect = e => {
		this.setState({
			select: e.target.value,
		});
	};

	showModal = id => {
		const { employees } = this.props.companies;
		const employee = employees.find(element => element.id === id);

		this.setState({
			show: true,
			employee,
		});
	};

	hideModal = () => {
		this.setState({
			show: false,
			employee: {},
		});
	};

	componentDidMount() {
		this.props.onInitCompanies();
	}

	render() {
		const { companies } = this.props;
		const { employees, companyInfo } = companies;
		const { term, show, employee, select, displayList } = this.state;

		return this.props.companies.length === 0 ? (
			<CircularProgress />
		) : (
			<Container maxWidth="lg">
				<div className="Company__container">
					<Companyheader info={companyInfo} />
					<div className="Company__container">
						<CompanyPanel
							onChangeInput={this.onChangeInput}
							onChangeSelect={this.onChangeSelect}
							searchValue={term}
							selectValue={select}
						/>
					</div>
					<div className="Company__card">
						<CompanyStaffList employees={employees} showModal={this.showModal} employee={employee} />
					</div>
					<div className="Company__modal">
						<CompanyModal show={show} hideModal={this.hideModal}>
							<CompanyEmpolyeeInfo employee={employee} />
						</CompanyModal>
					</div>
				</div>
			</Container>
		);
	}
}

Company.propTypes = {
	onInitCompanies: PropTypes.func,
};

export default Company;

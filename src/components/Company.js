import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Company extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onInitCompanies();
	}

	render() {
		const { companies } = this.props;
		console.log(companies);
		return <div>test</div>;
	}
}

Company.propTypes = {
	onInitCompanies: PropTypes.func,
};

export default Company;

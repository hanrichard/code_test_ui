import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Companyheader from './CompanyHeader';
import CompanyPanel from './CompanyPanel';
import CompanyStaffList from './CompanyStaffList';
import CompanyModal from './CompanyModal';
import CompanyEmpolyeeInfo from './CompanyEmpolyeeInfo';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Wrapper = styled.div`
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    height: 100vh;
    justify-content: center;
    align-items: center;
    justify-content: center;
`;

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
        const { term, show, employee, select } = this.state;
        const name = this.state.select;
        const regex = new RegExp(this.state.term, 'gi');

        let updatedEmployees =
            employees &&
            employees
                .sort(function(a, b) {
                    return a[name] > b[name] ? 1 : b[name] > a[name] ? -1 : 0;
                })
                .reduce((acc, item) => {
                    if ((item && item.lastName.match(regex)) || (item && item.firstName.match(regex))) {
                        acc.push(item);
                    }
                    return acc;
                }, []);

        return this.props.companies.length === 0 ? (
            <Wrapper>
                <CircularProgress />
            </Wrapper>
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
                        {updatedEmployees.length === 0 ? (
                            <h2>No result</h2>
                        ) : (
                            <CompanyStaffList
                                employees={updatedEmployees}
                                showModal={this.showModal}
                                employee={employee}
                            />
                        )}
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

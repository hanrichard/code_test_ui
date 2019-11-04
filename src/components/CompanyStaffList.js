import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import CompanyStaffListItem from "./CompanyStaffListItem";

const CompanyStaffList = ({ employees, showModal, employee }) => (
  <Grid container spacing={3}>
    {employees &&
      employees.map(item => (
        <Grid item xs={12} sm={4} key={item.id}>
          <CompanyStaffListItem
            employee={item}
            showModal={() => showModal(item.id)}
            select={item.id === employee.id ? "is-selected" : ""}
          />
        </Grid>
      ))}
  </Grid>
);

CompanyStaffList.propTypes = {
  showModal: PropTypes.func,
  employees: PropTypes.array
};

export default CompanyStaffList;

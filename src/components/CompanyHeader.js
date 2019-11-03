import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { formatDateTimeToLocale } from '../utils/helper';

const CompanyItem = info => {
	const Wrapper = styled.div`
		border-bottom: 1px solid rgba(0, 0, 0, 0.23);
		padding: 30px 0;
		margin-bottom: 30px;

		.Company__header-info {
			@media only screen and (min-width: 600px) {
				display: flex;
				justify-content: space-between;
			}
		}

		.Company__header-container {
		}
	`;

	return (
		<Wrapper className="Company__header">
			<Typography variant="h3" component="h1" gutterBottom>
				{info.info.companyName}
			</Typography>

			<div className="Company__header-info">
				<div>
					<Typography component="p" gutterBottom>
						{info.info.companyMotto}
					</Typography>
				</div>
				<div>
					<Typography component="p" gutterBottom>
						Since
						{formatDateTimeToLocale(info.info.companyEst)}
					</Typography>
				</div>
			</div>
		</Wrapper>
	);
};

CompanyItem.propTypes = {
	info: PropTypes.shape({
		info: PropTypes.shape({
			companyName: PropTypes.string,
			companyMotto: PropTypes.string,
			companyEst: PropTypes.number,
		}),
	}),
};

export default CompanyItem;

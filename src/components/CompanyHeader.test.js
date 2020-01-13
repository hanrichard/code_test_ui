import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CompanyHeader from './CompanyHeader';

configure({ adapter: new Adapter() });

function setup() {
	const props = {
		info: {
			companyName: 'name',
			companyMotto: '1234',
			companyEst: 12345,
		},
	};

	const shallowWrapper = shallow(<CompanyHeader {...props} data-test="test" />);
	const mountWrapper = mount(<CompanyHeader {...props} data-test="test" />);

	return {
		props,
		mountWrapper,
		shallowWrapper,
	};
}

describe('CompanyHeader item component', () => {
	const { mountWrapper } = setup();

	it('should render', () => {
		expect(mountWrapper.exists('[data-test]')).toEqual(true);
	});

	it('should render correct props', () => {
		expect(mountWrapper.text().includes('name')).toBe(true);
		expect(mountWrapper.text().includes('1234')).toBe(true);
		expect(mountWrapper.text().includes('1/1/1970')).toBe(true);
	});
});

import reducer from './companies';
import * as types from '../actions/actionTypes';

describe('todos reducer', () => {
	it('should return the initial state', () => {
		expect(reducer([], {})).toEqual([]);
	});

	it('should handle FETCH_COMPANIES', () => {
		expect(
			reducer([], {
				type: types.FETCH_COMPANIES,
				payload: {
					companyInfo: {
						companyName: 'Conroy - Boyer',
						companyMotto: 'back-end reinvent convergence',
						companyEst: '2019-05-05T04:57:09.528Z',
					},
					employees: [
						{
							id: '5ae23d8b-9b2c-420f-af13-c2d31147c556',
							avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/elenadissi/128.jpg',
							firstName: 'Ellie',
							lastName: 'Jenkins',
							jobTitle: 'District Interactions Developer',
							age: 53,
							bio:
								'Maxime et sed sapiente qui et. Tenetur ex non eius quibusdam rem. Accusantium placeat maiores qui dolor accusamus nihil ullam. Porro ratione ad ut est. Doloremque consequuntur facilis ipsam eveniet.',
							dateJoined: '2016-10-29T06:13:40.036Z',
						},
					],
				},
			})
		).toEqual({
			companeis: {
				companyInfo: {
					companyName: 'Conroy - Boyer',
					companyMotto: 'back-end reinvent convergence',
					companyEst: '2019-05-05T04:57:09.528Z',
				},
				employees: [
					{
						id: '5ae23d8b-9b2c-420f-af13-c2d31147c556',
						avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/elenadissi/128.jpg',
						firstName: 'Ellie',
						lastName: 'Jenkins',
						jobTitle: 'District Interactions Developer',
						age: 53,
						bio:
							'Maxime et sed sapiente qui et. Tenetur ex non eius quibusdam rem. Accusantium placeat maiores qui dolor accusamus nihil ullam. Porro ratione ad ut est. Doloremque consequuntur facilis ipsam eveniet.',
						dateJoined: '2016-10-29T06:13:40.036Z',
					},
				],
			},
		});
	});
});

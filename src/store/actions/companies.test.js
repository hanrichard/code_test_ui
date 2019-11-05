import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from './companies';
import * as types from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
	beforeEach(function() {
		moxios.install();
	});

	afterEach(function() {
		moxios.uninstall();
	});

	it('create PHOTOS_FETCH when photos being fetched', () => {
		moxios.stubRequest('https://jsonplaceholder.typicode.com/photos', {
			status: 200,
			response: [
				{
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
			],
		});

		const expectedActions = {
			type: types.FETCH_PHOTOS,
			photos: [
				{
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
			],
		};

		const store = mockStore({
			data: [],
		});

		const p = store.dispatch(actions.initCompanies());
		moxios.wait(function() {
			p.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});
});

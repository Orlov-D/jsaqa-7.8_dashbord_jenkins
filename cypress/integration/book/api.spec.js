describe('Pet store test', () => {
	it('Should add user', () => {
		cy.request('POST', 'https://petstore.swagger.io/v2/user', {
			id: 10,
			username: 'GYGY',
			firstName: '1',
			lastName: '2',
			email: '3',
			password: '4',
			phone: '5',
			userStatus: 1,
		}).should((response) => {
			expect(response.status).to.eq(200);
			expect(response.body.message).to.eq('10');
		});
	});

	it('Should edit user', () => {
		cy.request('PUT', 'https://petstore.swagger.io/v2/user/GYGY', {
			id: 15,
			username: 'GYGY',
			firstName: '1',
			lastName: '2',
			email: '3',
			password: '4',
			phone: '5',
			userStatus: 1,
		}).should((response) => {
			expect(response.status).to.eq(200);
			expect(response.body.message).to.eq('15');
		});
	});

	it('Should delete user', () => {
		cy.request('DELETE', 'https://petstore.swagger.io/v2/user/GYGY').should(
			(response) => {
				expect(response.status).to.eq(200);
				expect(response.body.message).to.eq('GYGY');
			}
		);
	});
});

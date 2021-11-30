it('Should not login', () => {
	cy.visit('/');
	cy.login('test@test.com', 'test');
	cy.contains('Управление залами').should('be.visible');
});

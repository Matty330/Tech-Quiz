describe('Basic app test', () => {
    it('can visit the page', () => {
      cy.visit('/');
      cy.log('Page loaded');
      // Just checking if anything at all loads
      cy.get('body').should('exist');
    });
  });  // test
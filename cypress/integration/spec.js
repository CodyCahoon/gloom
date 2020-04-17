describe('Gloom', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Page', () => {

    it('has three panels', () => {
      cy.get('.panel').should('have.length', 3)
    });  

    it('has the correct panel titles', () => {
      cy.get('.panel__title').contains('Characters')
      cy.get('.panel__title').contains('Perks')
      cy.get('.panel__title').contains('Attack Modifiers')
    });
  });
});

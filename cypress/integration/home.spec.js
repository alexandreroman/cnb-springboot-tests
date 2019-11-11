describe('Home', function() {
    it('Visits the home page', function() {
      cy.visit(Cypress.env('base_url'))

      cy.contains("Hello")
    })
  })

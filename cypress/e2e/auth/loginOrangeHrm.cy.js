describe('Login Orange HRM', () => {
  it('Verify Orange HRM Login with valid credentials', () => {
    cy.login();
    cy.url().should('include', '/dashboard');
  })
})
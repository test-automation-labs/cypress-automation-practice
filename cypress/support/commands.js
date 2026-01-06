Cypress.Commands.add('login', (
  username = Cypress.env('username'),
  password = Cypress.env('password')
) => {
  cy.visit('/web/index.php/auth/login')

  cy.get('input[name="username"]',  { timeout: 10000 }).type(username, {delay: 100})
  cy.get('input[name="password"]').type(password, {delay: 100})
  cy.get('button[type="submit"]').click()
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { adminModuleSelectors } from '../../selectors/adminModule/adminModule'

class SearchPage {

  verifySearchByName() {
    cy.get(adminModuleSelectors.usernameFilter, { timeout: 10000 }, {force: true})
      .should('be.visible')
      .type('Test User')
  }
}

export default new SearchPage()


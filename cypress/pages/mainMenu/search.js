import { mainMenuSelectors } from '../../selectors/mainMenuSelectors/mainMenuSelectors'

class SearchPage {

  verifySearchIsVisible() {
    cy.get(mainMenuSelectors.searchContainer, { timeout: 10000 }, {force: true})
      .should('be.visible')
  }

  search(text) {
    cy.get(mainMenuSelectors.searchInput, { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(text)
  }

  openSearchResult(text) {
    cy.get(mainMenuSelectors.menuItemByName(text), { timeout: 10000 })
      .should('be.visible')
      .click()
  }
}

export default new SearchPage()

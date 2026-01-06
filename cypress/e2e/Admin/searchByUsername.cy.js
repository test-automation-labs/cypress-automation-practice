import searchOnAdmin from '../../pages/adminModule/searchFilter'
import mainMenuPage from '../../pages/mainMenu/mainMenu'

describe('Admin - Add User', () => {

  beforeEach(() => {
    cy.login()
    mainMenuPage.clickAdmin();

})

  it('Verify admin filters By search filter name', () => {
    searchOnAdmin.verifySearchByName();
  })
})
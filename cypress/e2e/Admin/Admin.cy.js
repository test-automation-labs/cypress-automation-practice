import AdminModulePage from '../../pages/adminModule/adminModule'
import MainMenuPage from '../../pages/mainMenu/mainMenu'

describe('Admin - Add User', () => {

  beforeEach(() => {
    cy.login()
    MainMenuPage.clickAdmin();

})

  it('Add new admin user', () => {

    const username = `admin_${Date.now()}`

    AdminModulePage.clickAdd()
    AdminModulePage.verifyAddUserPage()

    AdminModulePage.selectUserRole('Admin')
    AdminModulePage.enterEmployeeName('Test User')
    AdminModulePage.selectStatus('Enabled')
    AdminModulePage.enterUsername(username)
    AdminModulePage.enterPassword('Admin@123')

    AdminModulePage.clickSave()

    cy.contains('Successfully Saved', { timeout: 10000 })
      .should('be.visible')
  })
})

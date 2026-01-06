import { adminModuleSelectors } from '../../selectors/adminModule/adminModule'

class AdminModulePage {

  clickAdd() {
    cy.get(adminModuleSelectors.addButton)
      .should('be.visible')
      .click()
  }

  verifyAddUserPage() {
    cy.get(adminModuleSelectors.addUserTitle)
      .should('contain', 'Add User')
  }

  selectUserRole(role) {
    cy.get(adminModuleSelectors.dropdowns)
      .eq(0)
      .click()

    cy.get(adminModuleSelectors.dropdownOption)
      .contains(role)
      .click()
  }

  enterEmployeeName(name) {
    cy.get('input[placeholder="Type for hints..."]')
      .type(name)

    cy.contains('.oxd-autocomplete-option', name)
      .click()
  }

  selectStatus(status) {
    cy.get(adminModuleSelectors.dropdowns)
      .eq(1)
      .click()

    cy.get(adminModuleSelectors.dropdownOption)
      .contains(status)
      .click()
  }

  enterUsername(username) {
    cy.get(adminModuleSelectors.textInputs)
      .eq(1)
      .type(username)
  }

  enterPassword(password) {
    cy.get(adminModuleSelectors.textInputs)
      .eq(2)
      .type(password)

    cy.get(adminModuleSelectors.textInputs)
      .eq(3)
      .type(password)
  }

  clickSave() {
    cy.get(adminModuleSelectors.saveButton)
      .click()
  }
}

export default new AdminModulePage()

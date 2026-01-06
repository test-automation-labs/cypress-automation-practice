import { mainMenuSelectors } from '../../../cypress/selectors/mainMenuSelectors/mainMenuSelectors'

class MainMenuPage {

    verifyMenuIsVisible() {
        cy.get(mainMenuSelectors.menuContainer)
            .should('be.visible')
    }

    clickMenuByName(menuName) {
        cy.get(mainMenuSelectors.menuItemByName(menuName))
            .should('be.visible')
            .click()
    }

    clickAdmin() {
        cy.get(mainMenuSelectors.adminLink).click()
    }

    clickPIM() {
        cy.get(mainMenuSelectors.pimLink).click()
    }

    clickLeave() {
        cy.get(mainMenuSelectors.leaveLink).click()
    }

    clickTime() {
        cy.get(mainMenuSelectors.timeLink).click()
    }

    clickRecruitment() {
        cy.get(mainMenuSelectors.recruitmentLink).click()
    }

    clickMyInfo() {
        cy.get(mainMenuSelectors.myInfoLink).click()
    }

    clickPerformance() {
        cy.get(mainMenuSelectors.performance).click()
    }

    clickDirectory() {
        cy.get(mainMenuSelectors.directory).click()
    }

    clickMaintenance() {
        cy.get(mainMenuSelectors.maintenance).click()
    }
    clicClaim() {
        cy.get(mainMenuSelectors.claim).click()
    }
    clickBuzz() {
        cy.get(mainMenuSelectors.buzz).click()
    }
}

export default new MainMenuPage()

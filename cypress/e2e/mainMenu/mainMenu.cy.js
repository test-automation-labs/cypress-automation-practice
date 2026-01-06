import MainMenuPage from '../../pages/mainMenu/mainMenu'

describe('Main Menu Navigation Tests', () => {

    beforeEach(() => {
        cy.login() // ENV based login
    })

    it('Verify main menu is visible', () => {
        MainMenuPage.verifyMenuIsVisible()
    })

    it('Navigate to Admin module', () => {
        MainMenuPage.clickAdmin()
        cy.url().should('include', '/admin')
    })

    it('Navigate to PIM module', () => {
        MainMenuPage.clickPIM()
        cy.url().should('include', '/pim')
    })

    it('Navigate to Leave module', () => {
        MainMenuPage.clickLeave()
        cy.url().should('include', '/leave')
    })

    it('Navigate to Time module', () => {
        MainMenuPage.clickTime()
        cy.url().should('include', '/time')
    })

    it('Navigate to Recruitment module', () => {
        MainMenuPage.clickRecruitment()
        cy.url().should('include', '/recruitment')
    })

    it('Navigate to My Info module', () => {
        MainMenuPage.clickMyInfo()
        cy.url().should('include', '/viewPersonalDetails')
    })

    it('Navigate to Performance module', () => {
        MainMenuPage.clickPerformance();
        cy.url().should('include', '/performance')
    })

    it.only('Navigate to Directory module', () => {
        MainMenuPage.clickDirectory();
        cy.url().should('include', '/directory')
    })

    it('Navigate to Claim module', () => {
        MainMenuPage.clicClaim();
        cy.url().should('include', '/claim')
    })

    it('Navigate to Buzz module', () => {
        MainMenuPage.clickBuzz();
        cy.url().should('include', '/buzz')
    })

    it.only('Navigate to Maintenance module', () => {
        MainMenuPage.clickMaintenance();
        cy.url().should('include', '/maintenance')
    })

})

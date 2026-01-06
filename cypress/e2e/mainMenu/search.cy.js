import SearchPage from '../../pages/mainMenu/search'

const modules = [
  { name: 'Admin', url: '/admin' },
  { name: 'PIM', url: '/pim' },
  { name: 'Leave', url: '/leave' },
  { name: 'Time', url: '/time' },
  { name: 'Recruitment', url: '/recruitment' },
  { name: 'My Info', url: '/viewPersonalDetails' },
  { name: 'Performance', url: '/performance' },
  { name: 'Dashboard', url: '/dashboard' },
  { name: 'Directory', url: '/directory' }, 
  { name: 'Claim', url: '/claim' },
  { name: 'Buzz', url: '/buzz' },
  { name: 'Maintenance', url: '/maintenance' },
]

describe('Menu Search E2E Tests', () => {

  beforeEach(() => {
    cy.login()
    SearchPage.verifySearchIsVisible()
  })

  modules.forEach(module => {
    it(`Search and open ${module.name}`, () => {
      SearchPage.search(module.name)
      SearchPage.openSearchResult(module.name)

      cy.url().should('include', module.url)
    })
  })

})

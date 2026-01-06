export const mainMenuSelectors = {
  menuContainer: '.oxd-main-menu',

  menuItemByName: (name) =>
    `.oxd-main-menu-item--name:contains("${name}")`,

  adminLink: 'a[href*="admin/viewAdminModule"]',
  pimLink: 'a[href*="pim/viewPimModule"]',
  leaveLink: 'a[href*="leave/viewLeaveModule"]',
  timeLink: 'a[href*="time/viewTimeModule"]',
  recruitmentLink: 'a[href*="recruitment/viewRecruitmentModule"]',
  myInfoLink: 'a[href*="pim/viewMyDetails"]',
  performance: 'a[href*="performance/viewPerformanceModule"]',
  directory: 'a[href*="directory/viewDirectory"]',
  maintenance: 'a[href*="maintenance/viewMaintenanceModule"]',
  claim: 'a[href*="claim/viewClaimModule"]',
  buzz: 'a[href*="buzz/viewBuzz"]',

  searchContainer: '.oxd-main-menu-search',

  searchInput: '.oxd-main-menu-search input',

  // searchResultByName: (moduleName) =>
  //   `.oxd-main-menu-item--name:contains("${moduleName}")`
}

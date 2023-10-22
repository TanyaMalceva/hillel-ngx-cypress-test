describe("LogIn", ()=> {
  it('should check LogIn with valid credentials', () => {
    cy.visit('/auth/login')
    cy.get('nb-login').as("loginForm")
    cy.get("@loginForm").should('be.visible')

    cy.get('nb-login>form [class="form-control-group"] input[placeholder="Email address"]').as("emailAddressInput")
    cy.get("@emailAddressInput").should('be.visible').type("test@gmail.com", {delay:50})

    cy.get('nb-login>form [class="form-control-group"] input[placeholder="Password"]').as("passwordInput")
    cy.get("@passwordInput").should('be.visible').type("Password000", {delay:50})

    cy.get('form .custom-checkbox').as("checkbox")
    cy.get("@checkbox").should('be.visible')

    cy.get('form .custom-checkbox').click()
    cy.get('form button[status="primary"]').click()

    cy.url().should('contain', '/pages')

  });
})

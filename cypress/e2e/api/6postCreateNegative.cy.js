describe("Posts", ()=>{
  it('should return 404', () => {
    const body = {
      "userId": 9,
      "title": "test",
      "body": "qa"
    }
    cy.api({
      url: '/posts0',
      method: 'POST',
      failOnStatusCode: false,
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).as("createNegativePost")

    cy.wrap("@createNegativePost")

    cy.get("@createNegativePost").its("status")
      .should("equal", 404)

    cy.get("@createNegativePost").its("body")
      .should('be.empty')
  });
})

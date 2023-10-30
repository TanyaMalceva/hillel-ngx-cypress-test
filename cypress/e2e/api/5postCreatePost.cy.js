describe("Posts", ()=>{
  it('should create', () => {
    const body = {
      "userId": 101,
      "title": "test",
      "body": "new"
    }
    cy.api({
      url: '/posts',
      method: 'POST',
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).as("createPost")

    cy.wrap("@createPost")

    cy.get("@createPost").its("status")
      .should("equal", 201)

    cy.get("@createPost").its("body")
      .should("deep.include", body)
  });
})

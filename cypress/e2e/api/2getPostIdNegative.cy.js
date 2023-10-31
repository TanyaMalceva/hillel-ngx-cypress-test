describe("Posts", ()=>{
  it('should return 404 Not Found', () => {
    const postId = 90
    cy.api({
      url: `https://jsonplaceholder.typicode.com/postsp/${postId}`,
      method: 'GET',
      failOnStatusCode: false,

}).as("getPost")

cy.wrap("@getPost")

cy.get("@getPost").its("status")
  .should("equal", 404)

    cy.get("@getPost").its("body")
      .should('be.empty')
    });
})

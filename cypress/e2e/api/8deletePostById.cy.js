describe("Posts", ()=>{
  it('should delete post by id', () => {
    const postId = 5

    cy.api({
      url: `/posts/${postId}`,
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).as("deletedPost")

    cy.get("@deletedPost").its("status")
      .should("equal", 200)

    cy.get("@deletedPost").its('body').should('be.empty');
  })
})

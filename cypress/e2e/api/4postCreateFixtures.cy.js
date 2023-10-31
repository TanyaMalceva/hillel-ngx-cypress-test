import newPost from "../../fixtures/api/newPost.json";
describe("Posts", ()=>{
  it('should create', () => {

    cy.api({
      url: '/posts',
      method: 'POST',
      body: newPost,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }

    }).as("createPost")

    cy.wrap("@createPost")

    cy.get("@createPost").its("status")
      .should("equal", 201)

    cy.get("@createPost").its("body")
      .should("deep.include", newPost)
  });
})

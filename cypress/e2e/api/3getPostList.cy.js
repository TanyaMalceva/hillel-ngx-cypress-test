describe("Posts", ()=>{
  it('should return post by list - GET', () => {
    const postId = 5
    cy.api({
      url: `https://jsonplaceholder.typicode.com/posts`,
      method: 'GET',
    }).its("body").should("be.an", "array").and("not.be.empty");
  });
});

describe("Posts", ()=>{
  it('should return post by id - GET', () => {
    const postId = 7
    cy.api({
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      method: 'GET',
    }).its("body").should("deep.include", {id: postId});
  });
})

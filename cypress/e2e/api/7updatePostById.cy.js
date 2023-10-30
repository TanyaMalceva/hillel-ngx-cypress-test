describe("Posts", ()=>{
  const id = 7;
  const body = {
    title: "Lorem",
    body: "ipsum",
    userId: 2,
  };
        it('should update post', () => {
        cy.api({
          url: `/posts/${id}`,
          method: 'PUT',
          body,
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }).as("updatePost")

        cy.wrap("@updatePost")

        cy.get("@updatePost").its("status").should("equal", 200)

        cy.get("@updatePost").its("body")
          .should("deep.include", body);
      })
  });
//})

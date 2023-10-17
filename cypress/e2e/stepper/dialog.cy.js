describe("Dialog page", ()=> {
  it('should check "Enter your name" modal window', () => {
    cy.visit('/pages/modal-overlays/dialog')
    cy.get('nb-card-body[class="result-from-dialog"]').as("block")
    cy.get('nb-card-body[class="result-from-dialog"] button').as("button")
    cy.get("@button").click()

    cy.get('nb-card-header').last().as("cardHeader")
    cy.get("@cardHeader").should('have.text', "Enter your name")

    cy.get('nb-card-body input').last().as("cardBody")

    cy.get('nb-card-footer button').first().as("cardCancelButton")
    cy.get('nb-card-footer button').last().as("cardSubmitButton")
  });
})

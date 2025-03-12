describe("Tech Quiz Application", () => {
  it("should test the entire quiz flow", () => {
    // Visit with a longer timeout
    cy.visit("/", { timeout: 30000 });
    
    // Wait for React to hydrate and app to load (increased timeout)
    cy.get("#root", { timeout: 20000 }).should("not.be.empty");
    
    // Look for button with specific wait
    cy.get('button:contains("Start Quiz")', { timeout: 15000 }).should('be.visible').click();
    
    // Wait for questions to load
    cy.get("h2", { timeout: 10000 }).should("be.visible");
    
    // Answer 10 questions
    for (let i = 0; i < 10; i++) {
      // Verify a question is displayed
      cy.get("h2").should("be.visible");
      
      // Click on the first answer
      cy.get(".btn-primary").first().click();
      
      // For the last question, check if we've reached the end
      if (i === 9) {
        // Verify the quiz completion screen shows up
        cy.contains("Quiz Completed", { timeout: 5000 }).should("be.visible");
      }
    }
    
    // Verify the score is shown
    cy.contains("Your score:").should("be.visible");
    
    // Check that the "Take New Quiz" button is available
    cy.contains("Take New Quiz").should("be.visible");
  });
});
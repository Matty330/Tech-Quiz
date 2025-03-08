describe("Tech Quiz Application", () => {
    beforeEach(() => {
    // Visit the application before each test
    cy.visit("/");
    });

    it("should allow a user to take a quiz", () => {
    // Check that the start button is visible
    cy.get("button").contains("Start Quiz").should("be.visible");

    // Start the quiz
    cy.get("button").contains("Start Quiz").click();

    // Wait for questions to load
    cy.get("h2", { timeout: 10000 }).should("be.visible");

    // Answer 10 questions (the quiz has 10 questions total)
    for (let i = 0; i < 10; i++) {
      // Verify a question is displayed
        cy.get("h2").should("be.visible");

      // Click on the first answer for each question
        cy.get(".d-flex.align-items-center").first().find("button").click();

      // For the last question, check if we've reached the end      if (i === 9) {
        // Verify the quiz completion screen shows up
        cy.contains("Quiz Completed", { timeout: 5000 }).should("be.visible");
        }
    }

    // Verify the score is shown
    cy.contains("Your score:").should("be.visible");

    // Check that the "Take New Quiz" button is available
    cy.get("button").contains("Take New Quiz").should("be.visible");
    });

    it("should allow starting a new quiz after completion", () => {
    // Start the quiz
    cy.get("button").contains("Start Quiz").click();

    // Wait for questions to load
    cy.get("h2", { timeout: 10000 }).should("be.visible");

    // Answer 10 questions quickly
    for (let i = 0; i < 10; i++) {
        cy.get(".d-flex.align-items-center").first().find("button").click();
    }

    // Verify we reached the end
    cy.contains("Quiz Completed").should("be.visible");

    // Start a new quiz
    cy.get("button").contains("Take New Quiz").click();

    // Verify a new quiz has started
    cy.get("h2", { timeout: 10000 }).should("be.visible");

    // The quiz should have questions
    cy.get(".d-flex.align-items-center").should("have.length.at.least", 1);
    });
});

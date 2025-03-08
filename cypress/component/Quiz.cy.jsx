// cypress/component/Quiz.cy.jsx
import React from "react";
import Quiz from "../../client/src/components/Quiz";

describe("Quiz Component", () => {
    beforeEach(() => {
    // Mock the API call
    cy.intercept("GET", "/api/questions/random", {
        fixture: "questions.json",
    }).as("getQuestions");
    cy.mount(<Quiz />);
    });

    it("should render the start button", () => {
    cy.get("button").contains("Start Quiz").should("be.visible");
    });

    it("should start the quiz when the start button is clicked", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.wait("@getQuestions");
    cy.get("h2").should("be.visible");
    cy.get(".btn-primary").should("have.length.at.least", 1);
    });

    it("should display the next question when an answer is selected", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.wait("@getQuestions");

    // Store the first question text
    cy.get("h2").then(($h2) => {
        const firstQuestionText = $h2.text();
        
      // Click the first answer button
        cy.get(".d-flex.align-items-center").first().find("button").click();
        
      // Give it a moment to update
        cy.wait(500);
        
      // Check that we've moved to the second question
        cy.get("h2").should("contain", "What is JSX?");
    });
    });

    it("should show the score when the quiz is completed", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.wait("@getQuestions");

    // Answer all questions in the mock data (we have 2 questions)
    cy.get(".d-flex.align-items-center").first().find("button").click();
    cy.get(".d-flex.align-items-center").first().find("button").click();

    // Verify the quiz completion screen is shown
    cy.contains("Quiz Completed").should("be.visible");
    cy.contains("Your score:").should("be.visible");
    cy.get("button").contains("Take New Quiz").should("be.visible");
    });
});
// Run through the process until questions are 10/10
// And begin button should re-appear

describe("Complete quiz", () => {
  it("visit quiz page", () => {
    cy.visit("http://localhost:3000");
  });

  it("click begin", () => {
    cy.get(".MuiButton-containedPrimary");
    cy.get(".MuiButton-label").contains("Begin");
    cy.get(".MuiButton-containedPrimary").click();
  });

  it("should show the next button when an answer is chosen", () => {
    cy.get(".answer").first().click();
    cy.wait(500);
    cy.get(".next-btn");
  });

  it("should show a new question when next is called", () => {
    cy.get(".next-btn").click();
  });

  it("should show the next button when an answer is chosen", () => {
    cy.get(".answer").first().click();
  });

  it("should show a new question when next is called", () => {
    cy.get(".next-btn").click();
  });

  it("should show the next button when an answer is chosen", () => {
    cy.get(".answer").first().click();
  });

  it("should show a new question when next is called", () => {
    cy.get(".next-btn").click();
  });

  it("should show the next button when an answer is chosen", () => {
    cy.get(".answer").first().click();
  });

  it("should show a new question when next is called", () => {
    cy.get(".next-btn").click();
  });

  it("should show the next button when an answer is chosen", () => {
    cy.get(".answer").first().click();
  });

  it("should show a new question when next is called", () => {
    cy.get(".next-btn").click();
  });

  it("should show the next button when an answer is chosen", () => {
    cy.get(".answer").first().click();
  });

  it("should show a new question when next is called", () => {
    cy.get(".next-btn").click();
  });

  it("should show the next button when an answer is chosen", () => {
    cy.get(".answer").first().click();
  });

  it("should show a new question when next is called", () => {
    cy.get(".next-btn").click();
  });

  it("should show the next button when an answer is chosen", () => {
    cy.get(".answer").first().click();
  });

  it("should show a new question when next is called", () => {
    cy.get(".next-btn").click();
  });

  it("should show the next button when an answer is chosen", () => {
    cy.get(".answer").first().click();
  });

  it("should show a new question when next is called", () => {
    cy.get(".next-btn").click();
  });

  it("should show the next button when an answer is chosen", () => {
    cy.get(".answer").first().click();
    cy.get(".question-number").contains("10");
    cy.get(".total-questions").contains("10");
  });

  it("begin button should show again", () => {
    cy.get(".MuiButton-containedPrimary");
    cy.get(".MuiButton-label").contains("Begin");
  });
});

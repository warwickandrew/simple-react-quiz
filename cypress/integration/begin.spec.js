describe("My First Test", () => {
  it("Should load the index page of quiz", () => {
    cy.visit("http://localhost:3000");
  });

  it("should have a button which contains begin", () => {
    cy.get(".MuiButton-containedPrimary");
    cy.get(".MuiButton-label").contains("Begin");
  });

  it("should show loading when clicked", () => {
    cy.get(".MuiButton-containedPrimary").click();
    cy.get(".loading");
  });

  it("should show the score when clicked and it should begin at 0", () => {
    cy.get(".user-score").contains("0");
  });

  it("should begin with question 1 and the total of question 10 and contain a question", () => {
    cy.get(".question-number").contains("1");
    cy.get(".total-questions").contains("10");
    cy.get(".question");
  });

  it("should have the possibility of 4 answers", () => {
    cy.get(".answer").should("have.length", 4);
  });

  it("should show the next button when an answer is chosen", () => {
    cy.get(".answer").first().click();
    cy.wait(500);
    cy.get(".next-btn");
  });

  it("should show a new question when next is called", () => {
    cy.get(".next-btn").click();
    cy.wait(500);
    cy.get(".question-number").contains("2");
  });
});

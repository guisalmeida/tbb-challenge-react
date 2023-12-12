/// <reference types="cypress" />

describe("Accessibility tests", () => {
  it("Should log any accessibility failures", () => {
    cy.analyseA11y("/");
  });
});

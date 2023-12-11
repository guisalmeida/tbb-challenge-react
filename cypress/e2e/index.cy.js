/// <reference types="cypress" />
/* eslint-disable no-undef */

describe("Accessibility tests", () => {
  it("Test", () => {
    cy.analyseA11y("/");
  });
});

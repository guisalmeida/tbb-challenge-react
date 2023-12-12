/// <reference types="cypress" />

describe("Search component", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.reload();
    cy.viewport("iphone-x");
  });

  it("Should exist a title with text", () => {
    cy.get(".search-header__container h1")
      .should("exist")
      .should("have.text", "O que você está procurando?");
  });

  it("Should exist an input", () => {
    cy.get('.search-input__container > .search-input__wrapper > .search-input').should("exist");
  });

  it("Should return 4 products when type 'fresh' into input", () => {
    cy.get('.search-input__container > .search-input__wrapper > .search-input').type("fresh");

    cy.get(".search-products__container > :nth-child(1)").should("exist");
    cy.get(".search-products__container > :nth-child(2)").should("exist");
    cy.get(".search-products__container > :nth-child(3)").should("exist");
    cy.get(".search-products__container > :nth-child(4)").should("exist");
    cy.get(".search-products__container > :nth-child(5)").should("not.exist");
  });

  it("Should open menu with filters when button is clicked", () => {
    cy.get(".search-filters__container").should("not.be.visible");
    cy.get(".search-input__button").click();
    cy.get(".search-filters__container").should("be.visible");
  });

  it("Should close menu with filters when close button is clicked", () => {
    cy.get(".search-input__button").click();
    cy.get(".search-filters__close-button").click();
    cy.get(".search-filters__container").should("not.be.visible");
  });

  it("Should show text with number of results when type 'fresh' into input", () => {
    cy.get('.search-input__container > .search-input__wrapper > .search-input').type("fresh");

    cy.get(".search-input__button").click();
    cy.get('.search-filters__results').should("contain.text", "4 resultados");
  });

  it("Should be checked when click in a category checkbox", () => {
    cy.get(".search-input__button").click();
    cy.get("#\\33 b6358c4e18cf03b4f2a932ab184e2b39984d85f27d519f4633af7ab")
      .click()
      .should("be.checked");
  });

  it("Should be not checked when click in a category checkbox which is checked", () => {
    cy.get(".search-input__button").click();
    cy.get("#\\33 b6358c4e18cf03b4f2a932ab184e2b39984d85f27d519f4633af7ab")
      .click()
      .click()
      .should("be.not.checked");
  });

  it("Should add to favorites category when click in the favorite button", () => {
    cy.get(":nth-child(1) > .product-card__favorite").click();
    cy.get(".search-input__button").click();
    cy.get(":nth-child(1) > label").should("have.text", "Favoritos (1)");
  });

  it("Should remove from favorites category when click in the favorite button and the product is already favorite", () => {
    cy.get(":nth-child(1) > .product-card__favorite").click();
    cy.get(":nth-child(1) > .product-card__favorite").click();
    cy.get(".search-input__button").click();
    cy.get(":nth-child(1) > label").should("have.text", "Favoritos (0)");
  });

  it("Should show just the only favorite product when click in favorite category", () => {
    cy.get(":nth-child(1) > .product-card__favorite").click();
    cy.get(".search-input__button").click();
    cy.get(":nth-child(1) > label").click();
    cy.get('.search-filters__close-button').click()
    cy.get(".search-products__container > :nth-child(2)").should("not.exist");
  });

  it("Should show the tag when click in favorite category", () => {
    cy.get(":nth-child(1) > .product-card__favorite").click();
    cy.get(".search-input__button").click();
    cy.get(":nth-child(1) > label").click();
    cy.get('.search-filters__tags > .category-tag').should("exist");
  });

  it("Should remove category filter when click in the tag", () => {
    cy.get(":nth-child(1) > .product-card__favorite").click();
    cy.get(".search-input__button").click();
    cy.get(":nth-child(1) > label").click();
    cy.get('.search-filters__tags > .category-tag').click();
    cy.get("#favoritos123").should("be.not.checked");
  });
});

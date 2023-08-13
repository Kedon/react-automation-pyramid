/**
 * Product Page Tests
 *
 * This test suite focuses on testing CRUD (Create, Read, Update, Delete) functionality
 * on the product page. It utilizes custom Cypress commands to perform login,
 * interact with the product page, create, update, and delete products.
 * The `beforeEach` hook ensures that the user is logged in and on the products page
 * before each test in the suite is executed.
 */

describe("Product Page Tests", () => {
  beforeEach(() => {
    // Bypass login and visit the products page before each test
    cy.bypassLogin();
    cy.visit("/products");
  });

  // Test CRUD functionality on the product page
  it("Product page CRUD", () => {
    // Test creating, updating, and deleting products
    cy.CreateNewProduct();
    cy.UpdatedProduct();
    cy.DeleteProduct();
  });
});

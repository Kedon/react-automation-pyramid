/**
 * Custom command to create a new product.
 * This command simulates adding a new product with a title and description,
 * and then verifies its presence in the products table.
 */
Cypress.Commands.add(`CreateNewProduct`, () => {
    cy.get('[data-testid="add-product-button"]').click();
    cy.get('[data-testid="product-title"]').clear().type('Add New Product Title');
    cy.get('[data-testid="product-description"]').clear().type('Add New Product Description');
    cy.get('[data-testid="edit-or-add-button"]').click();
  
    cy.get('[data-testid="products-table"]')
      .contains('td', 'Add New Product Title')
      .should('be.visible');
  });
  
  /**
   * Custom command to update an existing product.
   * This command clicks the "Edit" button for the second row in the products table,
   * updates the title and description, and verifies the changes in the table.
   */
  Cypress.Commands.add(`UpdatedProduct`, () => {
    cy.get('[data-testid="products-table"] tbody tr:nth-child(2) button:contains("Edit")').click();
  
    cy.get('[data-testid="product-title"]').type(' edited');
    cy.get('[data-testid="product-description"]').type(' edited');
    cy.get('[data-testid="edit-or-add-button"]').click();
  
    cy.get('[data-testid="products-table"]')
      .contains('td', ' edited')
      .should('be.visible');
  });
  
  /**
   * Custom command to delete a product.
   * This command simulates deleting a product by clicking the "Del" button,
   * then sends a DELETE request to an API endpoint, and verifies the response.
   * It also checks that the deleted product title is not present in the document.
   */
  Cypress.Commands.add(`DeleteProduct`, () => {
    cy.get('[data-testid="products-table"] tbody tr:nth-child(2) button:contains("Del")').click();
    cy.get('[data-testid="delete-button"]').click();
  
    cy.request("DELETE", "https://dummyjson.com/products/1").should((response) => {
      expect(response.status).to.eq(200);
  
      // Assert that the response.body.title is not in the document
      expect(document.body.textContent).to.not.contain(response.body.title);
    });
  });
  
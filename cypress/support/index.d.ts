/**
 * Declaration to extend the Cypress Chainable interface with custom commands.
 * This declaration adds custom command signatures to the Cypress Chainable interface,
 * allowing these commands to be used throughout the Cypress tests.
 */
declare namespace Cypress {
  interface Chainable<Subject> {
    // Custom command to perform standard login
    login(): void;

    // Custom command to bypass login using a session
    bypassLogin(username?, userpass?): void;

    // Custom command to create a new product
    CreateNewProduct(): void;

    // Custom command to update a product
    UpdatedProduct(): void;

    // Custom command to delete a product
    DeleteProduct(): void;
  }
}

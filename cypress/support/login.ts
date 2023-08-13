  /**
   * Custom command to bypass login using a session.
   * This command logs in a user by bypassing the login page and directly setting session data.
   * It visits the specified page after authentication and ensures the URL contains "/products".
   * @param {string} username - The username to log in.
   * @param {string} userpass - The user password for authentication.
   */

  /**
 * Using cacheAcrossSpecs: true in the cy.session() command allows you to cache and reuse
 * the session data across different test specifications (specs). This can be highly
 * advantageous in specific testing scenarios, enhancing efficiency and realism.
 *
 * Advantages of Using cacheAcrossSpecs: true:
 *
 * 1. Reduced Login Overhead:
 *    When your test suite spans multiple spec files and requires user authentication,
 *    cacheAcrossSpecs: true enables authenticating the user once and then reusing
 *    the authenticated session across various tests in different spec files. This
 *    minimizes the overhead of performing the login action repetitively in each test.
 *
 * 2. Faster Test Execution:
 *    Reusing the same session across multiple tests accelerates your test suite's
 *    execution time by eliminating the need to perform redundant login actions.
 *
 * 3. Realistic User Flow:
 *    In select cases, where testing post-authentication interactions is essential,
 *    utilizing a cached session emulates a more authentic user flow within tests.
 *
 * It's important to exercise discretion when opting for cacheAcrossSpecs: true, considering
 * its implications on test isolation, state dependencies, and potential interference.
 * Evaluate your testing requirements to determine the most suitable approach.
 */

  Cypress.Commands.add('bypassLogin', (username, userpass) => {
    cy.session([
        username = Cypress.env("LOGIN_USER"), 
        userpass = Cypress.env("LOGIN_PASSWORD")
    ], () => {
            cy.visit("/")

            /** Fill the login fields with email and password */
            cy.get('[name="email"]').clear().type(username);
            cy.get('[name="password"]').clear().type(userpass);
            cy.get('[data-testid="button"]').click();
             
            cy.url().should('contain', "/products")
        },
        {
            cacheAcrossSpecs:true
        })
    });  
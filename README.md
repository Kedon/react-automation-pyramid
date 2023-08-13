## Test Automation Pyramid Implementation in React

This project is part of the article “How to implement the test automation pyramid in a React project”. In it, you will find a real-world example of a successful implementation for React.

I am using the well-known Jest+React Testing Library (RTL) for unit and integration tests, and Cypress, another widely adopted library for End-to-end tests.

To improve comprehension, especially for those who are not familiar with testing, each file contains an explanation of how the tests work. If needed, I explain why I am using a specific implementation approach.

Keep in mind that the goal of this small project is to provide information about testing. It doesn't consider other important aspects of user experience. Therefore, focus on understanding the architecture and test implementation.

I sincerely hope this article and project can help you to take your first steps toward a better and more reliable system, which can improve end-user satisfaction. Feel free to leave a comment on my social networks:

- [LinkedIn](link-to-article)
- [Medium](link-to-article)

### Cypress configuration:

 - To use Cypress Studio, I added the `“experimentalStudio: true”` to the file `“cypress.config.ts”`;
 - I also changed the default port from `3000` to `4040`. You can check the package.json file for `"start": "PORT=4040 react-scripts start"`;
 - I set the base url to Cypress to `baseUrl: "http://localhost:4040"` in `“cypress.config.ts”`. You can modify this configuration if necessary.

### Jest configuration:

I kept the Jest configuration minimal. You can find it in src/jest.config.ts and src/jest.setup.ts. This configuration is sufficient to start with unit and integration tests.

### Good to know:

 - Only for testing purposes, I published the cypress.env.json. Don’t do this in real projects, or else sensitive information login credentials, might become public.
 - To obtain API request data, such as response.body and response.status, I installed the “cypress-plugin-api” library. When an item is deleted, the test checks if the api has returned a 200 status.
 - Both Jest + RTL tests and cypress tests are for the article purpose only. They do not cover all possible scenarios. When introducing the Test Automation Pyramid in a real-world project, consider errors and other untested scenarios. Refer to the libraries' official documentation for all available possibilities.
 - You can use this project as a starting point for your own.
 - And lastly, but no less important, integrate tests into deployment processes to effectively prevent the release of bugs and errors that could impact end-users.

One More Piece of Advice:

By default, Create-React-App has resetMocks enabled. If you encounter issues using Jest.mock function, you can disable it by adding the following to your package.json:
```json
"jest": {
"resetMocks": false
}
```


To wrap up, remember to review the npm scripts used to run tests. Here are some of them:

#### npm start: 
Runs the application in development mode. Any edits trigger a page reload.

#### npm test:
Runs tests for your React application using the Jest testing framework. It executes test files in the src directory and its subdirectories.

#### npm run test:all: 
Executes comprehensive testing. It combines both Cypress and Jest testing:
 - Cypress runs end-to-end tests in headless mode using the specified browser (default is Chrome).
 - After Cypress tests, it runs Jest tests for React components. This approach ensures coverage for both end-to-end and unit/integration tests.

#### npm run test:verbose: 
Executes Jest tests with detailed information for debugging and understanding test results.

#### npm run test:coverage:
Generates a test coverage report for your React application using Jest. The report highlights code coverage and identifies areas that need more testing.

#### npm run cy:open: 
Opens the Cypress Test Runner interface for interactive tests, aiding in debugging and end-to-end test development.

#### npm run cy:test: 
Runs Cypress end-to-end tests in headless mode using the Chrome browser. This is useful for integrating tests into CI/CD pipelines without a visual representation.
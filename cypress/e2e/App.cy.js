import "cypress-react-selector";

const host = Cypress.env("CYPRESSHOST") ?? "localhost";

describe("Basic tests", () => {
  it("Can visist localhost", () => {
    cy.visit(`http://${host}:3000/`);
  });
});

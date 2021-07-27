// Now it's time to write our first test. We're going to:

// Write our first passing test.
// Write our first failing test.
// Watch Cypress reload in real time.
// As we continue to save our new test file we'll see the browser auto reloading in real time.

// Open up your favorite IDE and add the code below to our sample_spec.js test file.

describe('First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('Second Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(false)
    })
})

describe('Visit a website', () => {
    it('Viists a kitchen sink.', () => {
        cy.visit('https://example.cypress.io')
    })
})

/*

Check if the website contains n

*/

describe('Visit Kitchen Sink', () => {
    it("Checks if kitchen sink contains 'type'", () => {
        cy.visit('https://example.cypress.io')
        
        cy.contains('type')
    })
})

/*

This test will fail as the website does not contain 'hype'

*/

describe('Visit Kitchen Sink', () => {
    it("Checks if kitchen sink contains 'hype'", () => {
        cy.visit('https://example.cypress.io');

        cy.contains('hype')
    })
})
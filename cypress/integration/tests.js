describe('Test GET Request', () => {
    it("Makes a get request on /", () => {
        cy.request('http://localhost:3000')
        cy.get('<pre>')
        .should('contain', '{"failed":false,"message":"This works!","exitCode":0}');
    })
})
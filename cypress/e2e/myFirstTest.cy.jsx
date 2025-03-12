describe('My First Cypress Test', ()=>{
    it('Visits the app and asserts Title', () => {
        cy.visit('/');
        cy.get('h1').should('contain', 'Rick and Morty')     
    });
});
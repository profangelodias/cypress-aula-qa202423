/// <reference types="cypress" />

context('Testes de Login', () => {

    it('Login válido', () => {
        cy.visit('https://www.saucedemo.com/')
        // cy.clearAllCookies()
        //informar o login
        cy.get('[data-test="username"]').type('standard_user')
        //informar a senha
        cy.get('[data-test="password"]').type('secret_sauce')
        //clicar no botão login
        cy.get('[data-test="login-button"]').click()
        //verificar o resultado
        cy.get('[data-test="title"]').should('have.text', "Products")
    });
    
});
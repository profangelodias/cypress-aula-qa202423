/// <reference types="cypress" />

context('Testes de Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });

    // afterEach(() => {
    //     cy.screenshot()
    // });

    it.only('Login válido', () => {
        cy.login('standard_user', 'secret_sauce')
        // //informar o login
        // cy.get('[data-test="username"]').type('standard_user')
        // //informar a senha
        // cy.get('[data-test="password"]').type('secret_sauce')
        // //clicar no botão login
        // cy.get('[data-test="login-button"]').click()
        // //verificar o resultado
        cy.get('[data-test="title"]').should('have.text', "Products")
    });

    // validar usuário bloqueado user: locked_out_user
    it('Login bloqueado', () => {
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
        cy.get('[data-test="error"]').should('contain','locked')
    });
    
    it('Login inválido/inexistente', () => {
        cy.get('[data-test="username"]').type('locked_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Senha inválida/inexistente', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_invalid')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

});
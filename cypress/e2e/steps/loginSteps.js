/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


Given("que eu acesse a página de autenticação do saucedemo", () =>{
    cy.visit('https://www.saucedemo.com/')
})

When("eu digitar o usuário {string}", (user) =>{
    cy.get('[data-test="username"]').type(user)
})

And("a senha {string}", (pass) =>{
    cy.get('[data-test="password"]').type(pass)
})

// E confirmar login
// Então deve ser exibido o título "Products"
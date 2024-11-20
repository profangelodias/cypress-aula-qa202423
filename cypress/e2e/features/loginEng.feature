Feature: Login no Swag Labs
    Description: Login Saucedemo

Background: Open login page
    Given que eu acesse a página de autenticação do saucedemo

Scenario: Login válido
    When eu digitar o usuário "standard_user"
    And a senha "secret_sauce" e confirmar
    Then deve ser exibido o título "Products"

Scenario Outline: Logins fail (Logins com falha)
    When eu digitar o usuário <user>
    And a senha <password> e confirmar
    Then deve ser exibida a mensagem de erro <textError>

    Examples:
        | user              | password      | textError |
        | "locked_out_user" | "secret_sauce"  | "Epic sadface: Sorry, this user has been locked out."  |
        | "user_inex"       | "secret_sauce"  | "Epic sadface: Username and password do not match any user in this service"  |
        | ""                | "secret_sauce"  | "Epic sadface: Username is required"  |
        | "user"            | ""  | "Epic sadface: Password is required"  |

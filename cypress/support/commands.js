// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })\



  export const loginUser = (email,password) =>
  cy.session([email, password], () => {
    cy.request({
      method: 'POST',
      url: `https://staging.clickup.com/auth/v1/login`,
      failOnStatusCode: false,
      headers: {
        
        withCredentials: true,
      },
      body: {
        email,
        password,
      },
    }).then(({ body: { refresh_token, token } }) => {
      window.localStorage.setItem('refresh_token', refresh_token);
      window.localStorage.setItem('id_token', token);
      
    })
  })
  

  Cypress.Commands.add('clickElement', (selector) => {
    return cy.get(selector).click();
  })
 
  Cypress.Commands.add('visitLastUrlVisited',()=>{
   return cy.visit('https://staging.clickup.com/login')
  })


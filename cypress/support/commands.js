import productCard from '../../cypress/e2e/page objects/productCard'

Cypress.Commands.add('cartWithProduct',()=>{
    cy.session('cartWithProduct',()=>{
        cy.visit('/')
        productCard.elements.addToCart('Galaxy').click()
    })
    
})

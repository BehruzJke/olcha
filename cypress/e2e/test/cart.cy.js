Cypress.on('uncaught:exception',(err, runnable)=>{
    return false
})

import cart from "../page objects/cart"

describe('Catalog',()=>{
    beforeEach('Visit the webiste',()=>{
        cy.cartWithProduct()
        cy.visit('/ru/cart')
    })

   it('Deletes product from cart',()=>{
    cart.elements.deleteBtn('Galaxy').click()
    cy.contains('Galaxy').should('not.exist')
   })
    
})

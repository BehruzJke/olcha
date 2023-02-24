Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

import cart from "../page objects/cart"
import productData from '../../fixtures/product.json'
describe('Cart', () => {
    beforeEach('Visit the webiste', () => {
        cy.cartWithProduct()
        cy.visit('/ru/cart')
    })

    it('Deletes product from cart', () => {
        cart.elements.deleteBtn(productData.products[0].name).click()
        cy.contains(productData.products[0].name).should('not.exist')
    })

})

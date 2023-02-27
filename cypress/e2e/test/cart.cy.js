//Ignore minor errors on the console
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

//import page objects 
import cart from "../page objects/cart"
import productData from '../../fixtures/product.json'
//Test suite to test cart functionality
describe('Cart', () => {
    //Create a session with a cart that contains a product before each test using custom cypress command
    beforeEach('Visit the webiste', () => {
        cy.cartWithProduct()
        cy.visit('/ru/cart')
    })
    //Test case to test delete functionality from the cart
    it('Deletes product from cart', () => {
        //Click on the delete button on the cart
        cart.elements.deleteBtn(productData.products[0].name).click()
        //Assert that product doesn't exist on the page after deleting
        cy.contains(productData.products[0].name).should('not.exist')
    })

})

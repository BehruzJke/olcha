Cypress.on('uncaught:exception',(err, runnable)=>{
    return false
})

import data from '../../fixtures/product.json'
import productPage from '../page objects/productPage'
import navbar from '../page objects/navbar'
import cart from '../page objects/cart'
// Product test suite
describe('Product',()=>{
    beforeEach('Open product page',()=>{
        //Visit the website
        cy.visit('/ru')
        //Search for the product and open it
        cy.searchProduct(data.products[0].name)
    })
    // Assert if all the elements exist on the page
    it('All the elements exist on the page',()=>{
        productPage.elements.productTitle().should('be.visible')
        productPage.elements.compareBtn().should('be.visible')
        productPage.elements.likeBtn().should('be.visible')
        productPage.elements.shareBtn().should('be.visible')
        productPage.elements.price().should('be.visible')
        productPage.elements.creditPrice().should('be.visible')
        productPage.elements.buyWithCredit().should('be.visible')
        productPage.elements.priceOption(0).should('be.visible')
        productPage.elements.addToCartBtn().should('be.visible')
        productPage.elements.buyOneClickBtn().should('be.visible')
    })
    
    // Add product to the cart
    it('Add product to cart',()=>{
        productPage.elements.addToCartBtn().click()
        navbar.elements.cart().click()
        cart.elements.product(data.products[0].name).should('contain',data.products[0].name)
    })

    // Buy in one click
    it('Buy in one click',()=>{
        productPage.elements.buyOneClickBtn().click()
        cy.get('.popup__container').should('be.visible')
    })

    // Buy with credit
    it('Buy product with credit',()=>{
        productPage.elements.buyWithCredit().click()
        cy.get('.popup__container').should('be.visible')

    })

})
Cypress.on('uncaught:exception',(err, runnable)=>{
    return false
})

import productCard from "../page objects/productCard"
import header from "../page objects/header"
import navbar from "../page objects/navbar"
import cart from "../page objects/cart"

describe('Catalog',()=>{
    beforeEach('Visit the webiste',()=>{
        cy.visit('/ru')
    })

    it('Searches the product',()=>{
        navbar.elements.searchInput().type('Samsung')
        cy.intercept('/api/v2/search/brands').as('searchHints')
        cy.wait('@searchHints')
        cy.wait(1000)
        navbar.elements.searchHints().should('be.visible')
        navbar.elements.searchHints().find('a').then((hints)=>{
            length = hints.length
            for(let i=0;i<length;i++){
                navbar.elements.searchHints().find('a').eq(i).should('contain','Samsung')
            }
        })
        })

    it('Adds product to the cart',()=>{ 
        cy.intercept('/api/v2/products*').as('products')
        cy.wait('@products')
        productCard.elements.addToCart('Galaxy').click()
        productCard.elements.count('Galaxy').should('have.value',1)
        navbar.elements.cartCount().should('have.text',1)
        navbar.elements.cart().click()
        cy.intercept('/api/v3/stores-products*').as('cartProduct')
        cy.wait('@cartProduct')
        cart.elements.product('Galaxy').should('be.visible')
    })
    
})

Cypress.on('uncaught:exception',(err, runnable)=>{
    return false
})

import productPage from "../page objects/productPage"
import data from "../../fixtures/product.json"
import navbar  from "../page objects/navbar"
//Test suite to test the like functionality
describe('Like & Saved products',()=>{
    beforeEach('Visit the homapage',()=>{
        cy.visit('/')
    })
    //Like products and check for it to appear in the SAVED page
    it('Like functionality',()=>{
        cy.searchProduct(data.products[1].name)
        productPage.like()
        productPage.assertLiked()

    })
})
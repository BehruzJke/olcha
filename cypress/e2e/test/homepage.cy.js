//Continue the test when uncaught errors happen in the console
Cypress.on('uncaught:exception',(err, runnable)=>{
    return false
})

//Import page objects
import productCard from "../page objects/productCard"
import navbar from "../page objects/navbar"
import cart from "../page objects/cart"
import productData from "../../fixtures/product.json"

//Test suite for catalog
describe('Catalog',()=>{
    //Visit the website before each test case
    beforeEach('Visit the webiste',()=>{
        cy.visit('/ru')
    })

    //Tests the search input in the homepage
    it('Searches the product',()=>{
        //Locate the search web element through page object and type in it
        navbar.elements.searchInput().type('Samsung')
        //Intercept the API that returns the search hints 
        cy.intercept('/api/v2/search/brands').as('searchHints')
        //Wait for the API to return the response
        cy.wait('@searchHints')
        cy.wait(1000)
        //Assert that hints are shown to us after API return the response
        navbar.elements.searchHints().should('be.visible')
        //Assert that each hint actually contain the phrase we searched
        navbar.elements.searchHints().find('a').then((hints)=>{
            length = hints.length
            for(let i=0;i<length;i++){
                navbar.elements.searchHints().find('a').eq(i).should('contain','Samsung')
            }
        })
        })

    //Tests if user can add product to the cart
    it('Adds product to the cart',()=>{ 
        //Intercept the API that returns the list of products
        cy.intercept('/api/v2/products*').as('products')
        //Wait for the products API to return response
        cy.wait('@products')
        //Locate the "add to cart" button in the product using page object and click
        productCard.elements.addToCart(productData.products[0].name).click()
        //Assert that product element has value 1 when we add it to the cart
        productCard.elements.count(productData.products[0].name).should('have.value',1)
        //Assert that cart icon has value of '1' 
        navbar.elements.cartCount().should('have.text',1)
        //Open the cart page to assert our product actually exists in the cart
        navbar.elements.cart().click()
        //Intercept the API that returns the cart products and save it as alias
        cy.intercept('/api/v3/stores-products*').as('cartProduct')
        //Wait for the API to finish loading
        cy.wait('@cartProduct')
        //Assert that our product actually exists in the cart page
        cart.elements.product(productData.products[0].name).should('be.visible')
    })
    
})

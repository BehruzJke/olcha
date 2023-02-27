//Import product object
import productCard from '../../cypress/e2e/page objects/productCard'
import navbar from '../e2e/page objects/navbar'
//Import test data from fixtures
import productData from '../fixtures/product.json'
//Add command to create a session with the product in the cart to save time
Cypress.Commands.add('cartWithProduct',()=>{
    //initiate the new session
    cy.session('cartWithProduct',()=>{
        //visit the homepage
        cy.visit('/')
        //Add the product to the cart
        productCard.elements.addToCart(productData.products[0].name).click()
    })
    
})

Cypress.Commands.add('searchProduct',(query)=>{
    cy.intercept('/api/v2/search/brands').as('searchHints')
    navbar.elements.searchInput().type(query)
    cy.wait('@searchHints')
    navbar.elements.searchHints().find('a').contains(query).first().click()

})
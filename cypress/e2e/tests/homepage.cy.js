//Continue the test when uncaught errors happen in the console
Cypress.on('uncaught:exception',(err, runnable)=>{
    return false
})

//Import page objects
import productCard from "../page objects/productCard"
import navbar from "../page objects/navbar"
import cart from "../page objects/cart"
import productData from "../../fixtures/product.json"
import header from "../page objects/header"

//Test suite for catalog
describe('Catalog',()=>{
    //Visit the website before each test case
    beforeEach('Visit the webiste',()=>{
        cy.visit('/ru')
    })

    //Assert that all the urls in the page are correct
    it.only('Test the urls in the page',()=>{
        header.elements.phoneNumber().should('have.attr','href','tel:+998712022021')
        navbar.elements.compareBtn().should('have.attr','href','/ru/compare')
        navbar.elements.liked().should('have.attr','href','/ru/favorites')
        navbar.elements.cart().should('have.attr','href','/ru/cart')
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
                navbar.elements.searchHints().find('a').eq(i).should('include.text','Samsung',{matchCase:false})
            }
        })
        })

    //Assert that all the categories exist in the page
    it('Asserts the categories',()=>{
        //Request the categories via API
        cy.request('GET','https://mobile.olcha.uz/api/v2/categories').then((res)=>{
        //Save categories count from API as a variable
        let count = res.body.data.categories.length
        //Assert that number of categories on tha page is equal to the one from API
        cy.get('#splide03-list > li').should('have.length', count)
        navbar.elements.catalogBtn().click()
        navbar.elements.categories().should('have.length',count)
    })
     })

    //Test the like functionality    
    it('Tests the like functionality',()=>{
        cy.get('#splide03-list li').first().click()
        cy.get('.subcategory-list__item').first().click()
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

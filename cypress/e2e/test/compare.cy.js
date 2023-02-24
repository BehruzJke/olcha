//Ignore tiny errors in the console while running tests
Cypress.on('uncaught:exception',(err, runnable)=>{
    return false
})

//Import test data and page objects
import navbar from "../page objects/navbar"
import productCard from "../page objects/productCard"
import productData from '../../fixtures/product.json'

//Test suite to test compare function
describe('Compare function',()=>{
    //Visit the website before each test case
    beforeEach('Visit the website',()=>{
        cy.visit('https://olcha.uz/ru')
    })

    //Test case to test the compare functionalilty
    it('Compares to products',()=>{
        productCard.elements.compareBtn(productData.products[1].name).click()
        productCard.elements.compareBtn(productData.products[0].name).click()
        navbar.elements.compareBtn().click()
        cy.intercept('https://mobile.olcha.uz/api/v2/products/compare*').as('compare')
        cy.wait('@compare').then(({ response }) => {
            response.body.data.features.forEach((feature, index) => {
                let featureName = feature.name_ru,
                    featureValues = feature.values

                cy.get('.compare__info-slider-wrapper').eq(index).should('contain',featureName).as('feature')
                featureValues.forEach((value, index) => {
                   cy.get('@feature').find('.compare__info-item').should('contain',value.name_ru)
                });
            });
        })

    })
})
Cypress.on('uncaught:exception',(err, runnable)=>{
    return false
})

import navbar from "../page objects/navbar"
import productCard from "../page objects/productCard"

describe('Compare function',()=>{
    beforeEach('Visit the website',()=>{
        cy.visit('https://olcha.uz/ru')
    })
    it('Compares to products',()=>{
        productCard.elements.compareBtn('Xiaomi').click()
        productCard.elements.compareBtn('Galaxy').click()
        navbar.elements.compareBtn().click()
        cy.intercept('https://mobile.olcha.uz/api/v2/products/compare*').as('comp')
        cy.wait('@comp').then(({ response }) => {
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
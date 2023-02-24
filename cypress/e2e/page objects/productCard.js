class productCard{
    elements = {
            self : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().as(`product-${el}`),
            // img : (el) =>  cy.get('@product').find('img'),
            img : (el) =>  cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('img'),
            likeBtn : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.product-card__actions').find('button').eq(0),
            compareBtn : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.product-card__actions').find('button').eq(1),
            price : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.price__main'),
            credit : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.price__credit'),
            addToCart : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.product-card__to-card'),
            // addToCart : (el) => cy.get(`@product-${el}`).find('.product-card__to-card'),
            // count : (el) => cy.get(`@product-${el}`).find('.count').find('input'),
            addToCredit : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.product-card__to-credit'),
            count : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.count').find('input'),   
    }
}

module.exports = new productCard();
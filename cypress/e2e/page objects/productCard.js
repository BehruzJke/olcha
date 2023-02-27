class productCard{
    elements = {
            //Product on the homepage
            self : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().as(`product-${el}`),
            //Image on the product
            img : (el) =>  cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('img'),
            //Like button on the product
            likeBtn : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.product-card__actions').find('button').eq(0),
            //Compare button on the product
            compareBtn : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.product-card__actions').find('button').eq(1),
            //Price of the product
            price : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.price__main'),
            //Credit sum of the product
            credit : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.price__credit'),
            //Add to cart button on the product
            addToCart : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.product-card__to-card'),
            //Add to credit button 
            addToCredit : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.product-card__to-credit'),
            //Count of the project after adding to cart
            count : (el) => cy.get('.popular__products-slider').find('.product-card').contains(`${el}`).parent().parent().parent().find('.count').find('input'),   
    }
}

module.exports = new productCard();
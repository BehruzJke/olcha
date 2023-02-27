//import navbar object
import navbar from "./navbar"

class productPage {
    elements = {
        //The title of the product
        "productTitle" : () => cy.get('#product-title'),
        //Compare button
        "compareBtn" : () => cy.contains('Добавить в сравнение'),
        //Like button of the product
        "likeBtn" : () => cy.get('.catalog-page__controls-col').find('button').eq(1),
        //Share button
        "shareBtn" : () => cy.contains('Поделиться'),
        //Price
        "price" : () => cy.get('.product-details__pricing').find('.price__main').eq(0),
        //Price for pay in 12 months
        "creditPrice" : () => cy.get('.product-details__pricing').find('.price__main').eq(1),
        //Buy with credit
        "buyWithCredit" : () => cy.contains('Купить в рассрочку'),
        //Price options in markets
        "priceOption" : (id) => cy.get('.product-details__content-bottom').find('.price__main').eq(id),
        //Add to cart button
        "addToCartBtn" : () => cy.contains('Добавить в корзину'),
        //Buy in one click
        "buyOneClickBtn" : () => cy.contains('Купить в один клик')
    }
    //Function to like the product
    like(){
        this.elements.likeBtn().click({force:true})
    }
    //Assert that the product is liked
    assertLiked(){
        this.elements.likeBtn().find('svg').should('have.css','fill','rgb(218, 0, 43)')
        navbar.elements.likedCount().should('have.text',1)
     }
    
}

module.exports = new productPage()
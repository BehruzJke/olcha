//import navbar object
import navbar from "./navbar"

class productPage {
    elements = {
        //The title of the product
        "productTitle" : () => cy.get('#product-title'),
        //Compare button
        "compareBtn" : () => cy.contains('Добавить в сравнение'),
        //Like button of the product
        likeBtn : () => cy.get('.catalog-page__controls-col').find('button').eq(1),
        //Share button
        "shareBtn" : () => cy.contains('Поделиться')
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
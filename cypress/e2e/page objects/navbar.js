class navbar{
    elements = {
        cart : () => cy.get('[aria-label="go cart"]'),
        cartCount : () => cy.get('[aria-label="go cart"]').find('span'),
        compareBtn : () => cy.get('.bottom-header').contains('Сравнение'),
        searchInput : () => cy.get('.form-search__input'),
        searchHints : () => cy.get('.search-results-list'),
        liked : () => cy.get('[aria-label="go to favs"]'),
        likedCount : () => this.elements.liked().find('span'),
        catalogBtn : () => cy.get('.bottom-header__menu-btn'),
        categories : () => cy.get('.menu-catalog__item')
    }
}

module.exports = new navbar();
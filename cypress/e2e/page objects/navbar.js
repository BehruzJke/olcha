class navbar{
    elements = {
        cart : () => cy.get('[aria-label="go cart"]'),
        cartCount : () => cy.get('[aria-label="go cart"]').find('span'),
        compareBtn : () => cy.get('.bottom-header').contains('Сравнение'),
        searchInput : () => cy.get('.form-search__input'),
        searchHints : () => cy.get('.search-results-list')
    }
}

module.exports = new navbar();
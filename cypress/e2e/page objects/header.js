class header{
    elements = {
        loanBtn : () => cy.get('.top-menu__buttons').find('a').eq(0),
        discountBtn : () => cy.get('.top-menu__buttons').find('a').eq(1),
        siteMapBtn : () => cy.get('[href="/ru/page/sitemap"]'),
        changeLanguageBtn : (lang) => cy.get(`a[href="/${lang}"]`),
        phoneNumber : () => cy.get('.top-actions__phone > a')
    }
}

module.exports = new header();
class cartProduct{
    //Elements in the product in the cart are selelected by name
    elements = {
        //Selects the whole product card
        product : (el) => cy.contains(`${el}`).parent().parent().parent(),
        //Selects the delete button within the selected product
        deleteBtn : (el) => cy.contains(`${el}`).parent().parent().parent().contains('Удалить')
}
}

module.exports = new cartProduct();
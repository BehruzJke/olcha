class cartProduct{
    elements = {
        product : (el) => cy.contains(`${el}`).parent().parent().parent(),
        deleteBtn : (el) => cy.contains(`${el}`).parent().parent().parent().contains('Удалить')
}
}
module.exports = new cartProduct();
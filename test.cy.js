describe('checking functionality', () => {
  it('passes', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#')
      cy.get('div.products-wrapper > div > div:nth-child(1) > div.stepper-input > a.increment').click()
      cy.get('div.products-wrapper > div > div:nth-child(1) > div.product-action > button').click()
      cy.get('.cart-items > .cart-item')
        .contains('Brocolli')
      cy.get('div > header > div > div.cart > a.cart-icon > img').click()
      cy.get('div.action-block > button').contains('PROCEED TO CHECKOUT').click()
      cy.get('.promoCode').type('123456')
      cy.get('.promoBtn').click()
      cy.get('button').contains('Place Order').click()
      cy.get('.chkAgree').click()
      cy.get('#root > div > div > div > div > div > select').select('Armenia')
      cy.get('button').contains('Proceed').click()
  })
 
})
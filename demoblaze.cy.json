describe('checking functionality', () => {
    it('passes', () => {
        cy.visit('https://www.demoblaze.com')
        cy.get('#signin2').click()
        cy.get('#sign-username').type('forTest25')
        cy.get('#sign-password').type('test25')
        cy.get('div.modal-footer > button.btn.btn-primary').contains('Sign up').click()
        cy.get('#login2').click()
        cy.get('#loginusername').type('forTest25')
        cy.get('#loginpassword').type('test25')
        cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click()
    })
})

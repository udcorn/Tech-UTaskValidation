describe('cy visit', function (){
    it('utask', function(){

        cy.visit('http://www.upwork.com/', { 
        failOnStatusCode: false})
        cy.wait(50000)
//CLICKING ON LOGIN LINK - {force:true} 
        cy.get('[data-cy="nav-left"] > .nav-item').click()
        cy.wait(4000)

        cy.get('#login_username').type('this@isnotemail.com')
        cy.get('#login_password_continue').click()
        cy.get('#username-message > span').contains('Oops! Username is incorrect.')
        





    })
})
describe('cy visit', function (){
    it('utask', function(){

        cy.visit('http://www.upwork.com/', { 
        failOnStatusCode: false})
        cy.wait(50000)

//CLICKING ON LOGIN LINK - {force:true} 
cy.get('[data-cy="nav-left"] > .nav-item').click()
cy.wait(4000)

cy.get('#login_username').type('walahm15@gmail.com')

cy.get('#login_password_continue').click()

cy.get('#login_google_submit').click() 

cy.get('[data-test="alert-content"] > .d-none > span').contains('Please fix the errors below')

cy.get('#username-message > span').contains('This field is required')
    
    })
})


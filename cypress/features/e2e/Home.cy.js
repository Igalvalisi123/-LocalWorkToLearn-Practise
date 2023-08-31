import { loginUser } from "../../support/commands";



describe ('Home',()=>{

    
    
    before(function(){
        cy.fixture('userstologin').then((user)=>{
        this.user = user
        } )

       
                           
    })

    it('Home',function(){
                
        
        loginUser(this.user.iagoCypressTest.user,this.user.iagoCypressTest.password)

        cy.visit('https://staging.clickup.com/login')        
       
    })
})
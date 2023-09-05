import { loginUser } from "../../support/commands";
import {globalActionBarV3} from "../../support/POMs/globalActionBarV3"


describe ('globalActionBarV3',()=>{
    
    before(function(){
                  
        
        
        
    })
    
    beforeEach(function(){
       const users = require('../../fixtures/userstologin.json')
       loginUser(users.iagoCypressTest.user,users.iagoCypressTest.password)
    })

    it('clickupLogo',function(){ 
        
        cy.visitLastUrlVisited()
        cy.clickElement(globalActionBarV3.clickUpLogo)       
       })

    it ('serachComponent',function(){
       
        cy.visitLastUrlVisited()    
        cy.wait(2000)
        cy.clickElement(globalActionBarV3.searchComponent)
    })
})
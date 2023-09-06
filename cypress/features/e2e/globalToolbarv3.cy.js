import { loginUser } from "../../support/commands";
import {globalActionBarV3} from "../../support/POMs/globalActionBarV3"


describe ('globalActionBarV3',()=>{
    
    before(function(){
                  
        
        
        
    })
    
    beforeEach(function(){
       const users = require('../../fixtures/userstologin.json')
       headlessloginUser(users.iagoCypressTest.user,users.iagoCypressTest.password)
    })

    it.skip('clickupLogo',function(){ 
        
        cy.visitLastUrlVisited()
        cy.clickElement(globalActionBarV3.clickUpLogo)       
       })
       
    it.skip ('serachComponent',function(){
       
        cy.visitLastUrlVisited()    
        cy.wait(2000)
        cy.clickElement(globalActionBarV3.searchComponent)
    })
    
    it.skip ('quickCreateButton',function(){
       
        cy.visitLastUrlVisited()    
        cy.wait(2000)
        cy.clickElement(globalActionBarV3.quickcreatebutton)
    })
  
    it.skip  ('quickActionButton',function(){
       
        cy.visitLastUrlVisited()    
        cy.wait(2000)
        cy.clickElement(globalActionBarV3.quickActionButton)
    })
    
    it ('quickActionButton',function(){
       
        cy.visitLastUrlVisited()    
        cy.wait(2000)
        cy.clickElement(globalActionBarV3.userSettings)
    })


})
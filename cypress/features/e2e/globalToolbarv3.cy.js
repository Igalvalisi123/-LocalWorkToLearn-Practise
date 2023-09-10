import { loginUser } from "../../support/commands";
import {globalActionBarV3} from "../../support/POMs/globalActionBarV3"
import { should } from "chai";
import { homePage } from "../../support/POMs/home";

describe ('globalActionBarV3',()=>{
    
    const users = require('../../fixtures/userstologin.json')
    const nameUsers = users.user
    
    before(function(){})
    
    beforeEach(function(){
       
       cy.headLessloginUser(users.iagoCypressTest.user,users.iagoCypressTest.password)

    })

    it('clickupLogo',function(){ 
       
        cy.visitLastUrlVisited()
        cy.clickElement(globalActionBarV3.clickUpLogo) 
        cy.wait(5000)
        cy.get(homePage.h1Home).should('contain','galvalisiago+cypress')
        ///expect(cy.get(homePage.h1Home)).to.contain('galvalisiago+cypress')

        ///const url = cy.url().toString()
        //expect(url).to.include('/home/v3')
       /// url.should('contain','galvalisiago+cypress')
       })
       
    it.only ('serachComponent',function(){
       
        cy.visitLastUrlVisited()    
        cy.wait(2000)
        cy.clickElement(globalActionBarV3.searchComponent)
        
        const tabs = cy.get(globalActionBarV3.seachComponentModal.searchDifferentTabs).find('div')
        
        tabs.each((eachtab)=>{
            cy.wrap(eachtab).click().should('have.class','Tabs-tab-QY8vB Tabs-tabSelected-n5s11')
           })
        ///.each(tabfromsearch => {    
         ///   tabfromsearch.click()
       // })




    })
    
    it.skip ('quickCreateButton',function(){
       
        cy.visitLastUrlVisited()    
        cy.wait(2000)
        expect(url).to.contain('/home')
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
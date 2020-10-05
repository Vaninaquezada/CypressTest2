/// <reference types="cypress" />
require('cypress-xpath')

var dni =  Math.floor(Math.random() * (99999999 - 180000)) + 180000;
var email = dni + "@prueba.com";

context('Pruebas Se socio', () => {
    beforeEach(() => {
        cy.visit('https://pwatest.sesocio.com/')
   })
  
   it('Registro Usuario', () => {
        
        // click boton Ingresar
        cy.get('#btn_login').click()
        //valida que exista la ventana de login
        cy.on('ventana login', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Ingresá a tu cuenta');
        })

        //click boton registrarse
        cy.contains('o registrarse').click()
        cy.on('ventana registro', (txt) => {
            //Mocha assertions
            expect(txt).to.contains(' Para comenzar, completá estos datos ');

        })
        //input nombre
        cy.xpath("//div[label[contains(text(),'Nombre')]]/input")
            .type('Fulanito')
            .should('have.value', 'Fulanito')
        //input apellido
        cy.xpath("//div[label[contains(text(),'Apellido')]]/input")
            .type('Perez')
            .should('have.value', 'Perez')
        
        //input mail
        cy.xpath("//form[@id='formu_registro']//div[label[contains(text(),'E-mail')]]/input")
            .type(email)
            .should('have.value', email)

        //input dni/ci
        cy.xpath("//div[label[contains(text(),'DNI/CI')]]/input")
            .type(dni)
            .should('have.value', dni)

        //input telefono
        cy.xpath("//div[label[contains(text(),'Teléfono')]]/input")
            .type('115488963')
            .should('have.value', '115488963')

        //input contraseña
        cy.xpath("//form[@id='formu_registro']//div[label[contains(text(),'Contraseña')]]/input")
            .type('Fulanito123')
            .should('have.value', 'Fulanito123')

        //input confirmar contraseña
        cy.xpath("//div[label[contains(text(),'Confirmar contraseña')]]/input")
            .type('Fulanito123')
            .should('have.value', 'Fulanito123')

        //check terminos y condiciones
        cy.xpath("//form[@id='formu_registro']//div[input[@type='checkbox']]").click()

        //presionar boton resgistarse
        cy.xpath("//button[span[contains(text(),'Registrarse')]]").click()
         //log out
        
         cy.get('#btnDrawer').click()
         cy.xpath("//button[span[contains(text(),'Salir')]]").click()

    })

   
    it('Login Usuario', () => {
        // click boton Ingresar
        cy.get('#btn_login').click()
        //valida que exista la ventana de login
        cy.on('ventana login', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Ingresá a tu cuenta');
        })

        //input mail
        cy.xpath("//form[not(@id)]//div[label[contains(text(),'E-mail')]]/input")
            .type(email)
            .should('have.value', email)
           
        //input contraseña
        cy.xpath("//form[not(@id)]//div[label[contains(text(),'Contraseña')]]/input")
            .type('Fulanito123')
            .should('have.value', 'Fulanito123')

        //presionar boton resgistarse
        cy.get('#btn_login_modal').click()
       
    })

    it('Buscar proyecto', () => {
        

        cy.xpath("//button[@class='ml-2 v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default black--text']").click()
       
       cy.xpath("//div[label[contains(text(),'Nombre de proyecto / Cripto')]]/input[@type='text']")
       .type('Robots UV ')
       .wait(500)
       .type('{backspace}{backspace}')
       cy.xpath("//div[label[contains(text(),'Nombre de proyecto / Cripto')]]/input[@type='text']")
       .click()
       .wait(100)
       cy.xpath("//div[@class='v-list-item theme--light']").click
    
        cy.xpath("//i[@class='v-icon notranslate mdi mdi-magnify theme--light primary--text']").click()
 
             
     })


})
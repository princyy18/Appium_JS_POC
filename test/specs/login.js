
const LoginPage = require ("../pageobjects/loginpo");
const helper = require("../utils/helper");
const HelperClass = require ("../utils/helper");
const { expect } = require('chai');
const path = require('path');


describe('Login', () => {

    it('Login Positive testcase',async () => {

        //Click on Login via phone text
        await HelperClass.waitForElementDisplayed(LoginPage.clickLoginViaPhoneText);
        await LoginPage.clickLoginViaPhoneText.click();

        //enter mobile number
        await LoginPage.enterMobile.setValue('9737279951');
        
        //click on continue button
        await LoginPage.clickContinue.click();

        //Click on skip to skip location access
        await LoginPage.skipAccessLocation.click(); 

        //Now, check if the toast text message is same as entered or not
        const toastText = "Authentication Successful!";
        const isToastDisplayed = await HelperClass.isToastMessageDisplayed(toastText);
        await expect(isToastDisplayed).to.be.true;
        
        console.log("Login Successful");

        //Close the app once test get passed
        await driver.closeApp();
     })    

    it('Enter invalid mobile number ',async () => {

        //Filepath and sheetname of invalid_logindata file
        const filePath = path.join(__dirname, '../utils/invalid_Logindata.xlsx');
        const sheetName = 'Sheet1';

        //array of all the invalid mobile number data
        const mobileNumberArray = await HelperClass.readDataFromExcel(filePath, sheetName);

        //Loop through all the invalid mobile number
        for (const mobileNumber of mobileNumberArray) {
        
        //Relaunch the App
        await driver.launchApp();
        
        //Click on Login Via Phone Text
        await HelperClass.waitForElementDisplayed(LoginPage.clickLoginViaPhoneText);
        await LoginPage.clickLoginViaPhoneText.click();
        
        //Enter a Invalid Mobile Number
        await LoginPage.enterMobile.click(); // Click on the input field first to focus
        await driver.keys(mobileNumber);
                
        //Now, check if the error text is displayed 
        expect(await LoginPage.LoginTextFieldErrorMessage.getText()).to.equal('Please enter a valid phone number');
        
        console.log("Successful TestRun with invalid mobile numbers");

        //Close the app once test get passed
        await driver.closeApp();

        }
    }) 
    
    it('Click on continue button without entering Mobile Number',async () => {
        
        //Relaunch the App//Relaunch the App
        await driver.launchApp();

        //Click on Login Via Phone Text
        await HelperClass.waitForElementDisplayed(LoginPage.clickLoginViaPhoneText);
        await LoginPage.clickLoginViaPhoneText.click();

        //Enter a Invalid Mobile Number
        await LoginPage.clickContinue.click();
        
        //Now, check if the error text is displayed 
        expect(await LoginPage.LoginTextFieldErrorMessage.getText()).to.equal('Please enter a valid phone number');

        console.log("Successful TestRun without entering anything");

        //Close the app once test get passed
        await driver.closeApp();
    })
    
    it('Enter wrong OTP with valid Mobile Number',async () => {
        
        //Relaunch the App
        await driver.launchApp();

        //Click on Login Via Phone Text
        await HelperClass.waitForElementDisplayed(LoginPage.clickLoginViaPhoneText);
        await LoginPage.clickLoginViaPhoneText.click();

        //Enter a Invalid Mobile Number
        await LoginPage.enterMobile.setValue('6353223359');

        //Enter a Invalid Mobile Number
        await LoginPage.clickContinue.click();
        
        //Click on skip to skip location access
        await LoginPage.skipAccessLocation.click();

        //Enter wrong OTP
        await LoginPage.pincode.setValue('0000');

        //Now, check if the toast text message is same as entered or not
        const toastText = "Wrong OTP entered. Please enter the correct OTP";
        const isToastDisplayed = await HelperClass.isToastMessageDisplayed(toastText);

        //Now, check if the Wrong OTP Error text is displayed 
        await expect(isToastDisplayed).to.be.true;
        
        console.log("Successful TestRun with wrong OTP");

        //Close the app once test get passed 
        await driver.closeApp();
    })

})
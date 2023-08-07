
const LoginPage = require ("../pageobjects/loginpo");
const HelperClass = require ("../utils/helper");
const path = require('path');

async function login() {

    //Filepath and sheetname of invalid_logindata file
    const filePath = path.join(__dirname, '../data/bansari_login.xlsx');
    const sheetName = 'login';

    //Read file
    const mobileNumber= await HelperClass.readDataFromExcel(filePath, sheetName);
   

      //Click on Login via phone text
      await HelperClass.waitForElementDisplayed(LoginPage.clickLoginViaPhoneText);
      await LoginPage.clickLoginViaPhoneText.click();

      //enter mobile number
      await LoginPage.enterMobile.click()
      await driver.keys(mobileNumber);
      
      //click on continue button
      await LoginPage.clickContinue.click();

      //Click on skip to skip location access
      await LoginPage.skipAccessLocation.click(); 

      // Click on skip in Time to pose screen
      await driver.pause(10000);
      await LoginPage.skipTimeToPose

      //Now, check if the toast text message is same as entered or not
      // const toastText = "Authentication Successful!";
      // const isToastDisplayed = await HelperClass.isToastMessageDisplayed(toastText);
      // await expect(isToastDisplayed).to.be.true;

      //Console message print
      console.log("Login Successful");
  }
  
  module.exports = {
    login,
  };
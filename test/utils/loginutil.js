
const LoginPage = require ("../pageobjects/loginpo");
const HelperClass = require ("../utils/helper");

async function login() {
      //Click on Login via phone text
      await HelperClass.waitForElementDisplayed(LoginPage.clickLoginViaPhoneText);
      await LoginPage.clickLoginViaPhoneText.click();

      //enter mobile number
      await LoginPage.enterMobile.setValue('9512827616');
      
      //click on continue button
      await LoginPage.clickContinue.click();

      //Click on skip to skip location access
      await LoginPage.skipAccessLocation.click(); 

      // Click on skip in Time to pose screen
      await LoginPage.skipTimeToPose

      //Now, check if the toast text message is same as entered or not
      const toastText = "Authentication Successful!";
      const isToastDisplayed = await HelperClass.isToastMessageDisplayed(toastText);
      await expect(isToastDisplayed).to.be.true;

      //Console message print
      console.log("Login Successful");
  }
  
  module.exports = {
    login,
  };

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

      //locating homepage elemets to check login is successful or not
      // await HelperClass.waitForElementDisplayed(LoginPage.homepageLogo);
      // expect(await LoginPage.homepageLogo.isDisplayed()).toBe(true);
      // expect(await LoginPage.homepageCall.isDisplayed()).toBe(true);

      //Console message print
      console.log("Login Successful");
  }
  
  module.exports = {
    login,
  };

const LoginPage = require ("../pageobjects/loginpo")
// import LoginPage from "../pageobjects/login.page"


describe('Login', () => {
    it('Login Positive testcase',async () => {

        baseXPath = "//*[@resource-id='com.lenskart.app:id/";
        endXPath = "']";

        //Click on Login via phone text
        await driver.pause(5000);
        await LoginPage.clickLoginViaPhoneText.click();

        //enter mobile number
        const enterMobile = await driver.$(baseXPath + "input_phone_number" + endXPath);
        await enterMobile.setValue('9737279951');
        
        // //click on continue button
        const clickContinue = await driver.$(baseXPath + "btn_continue" +endXPath);
        await clickContinue.click()

        // //Click on skip to skip location access
        const skipAccessLocation = await driver.$(baseXPath + "text_do_it_later" +endXPath);
        await skipAccessLocation.waitForDisplayed();
        await skipAccessLocation.click()

        // //Giving time to complete OTP
        await driver.pause(15000); 

        // //locating homepage elemets to check login is successful or not
        const homepageLogo = await driver.$(baseXPath + "iv_logo" +endXPath);
        const homepageCall = await driver.$(baseXPath + "iv_call" +endXPath);
        await homepageLogo.waitForDisplayed();
        await homepageCall.waitForDisplayed();
        expect(await homepageLogo.isDisplayed()).toBe(true);
        expect(await homepageCall.isDisplayed()).toBe(true);

        // //Console message print
        console.log("Login Successful")
    })    

})
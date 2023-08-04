
const LoginPage = require ("../pageobjects/loginpo");
const HelperClass = require ("../utils/helper");
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

        //locating homepage elemets to check login is successful or not
        await HelperClass.waitForElementDisplayed(LoginPage.homepageLogo);
        expect(await LoginPage.homepageLogo.isDisplayed()).toBe(true);
        expect(await LoginPage.homepageCall.isDisplayed()).toBe(true);

        //Console message print
        console.log("Login Successful");
    })    

})


const { login } = require('../utils/loginutil');
const SearchPage = require('../pageobjects/searchpo.js');

describe('Search test suite', ()=>{
    baseXPath = "//*[@resource-id='com.lenskart.app:id/";
    endXPath = "']";

    it('Perform login', async()=>{
        //Call login function from loginutils file
        //In login utils file login related login is added
          await login();
    }) 

    it('Search for item', async ()=>{

        // Click on search icon
        await driver.pause(20000);
        await SearchPage.clickSearch.click();
        await driver.pause(20000);

        // Click on eyeglasses
        await SearchPage.clickeyeglassed.click();

        
    })
})


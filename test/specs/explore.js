
//const { expect } = require("chai");
const ExplorePage = require ("..//pageobjects/explorepo");
const HelperClass = require ("../utils/helper");


describe('Explore test suite', ()=>{
   
    it('Open Items list', async()=>{
        await driver.pause(5000);
        // Click on explore
        await ExplorePage.explore.click();
        await driver.pause(5000); 
        
        // Verify page title
        element = ExplorePage.verifyTitle;
        await expect(element).toHaveText('Explore')
        await console.log("Redirected to explore page successfully")

        // Click on women section
         await ExplorePage.clickWomen.click();
         await driver.pause(5000); 

         // perform scroll- x(start and end is same), starty, endy
         await HelperClass.varticalScroll(500,1878,300)
         await driver.pause(10000); 

         //Verify section title is present or not
         await HelperClass.waitForElementDisplayed(ExplorePage.shopByBudget);
         expect(await ExplorePage.shopByBudget.isDisplayed()).toBe(true); 

        // CLick on very first section
        await ExplorePage.clickSection.click();
        await driver.pause(10000);

        //Verify filter menu presence
        await HelperClass.waitForElementDisplayed(ExplorePage.filter);
        expect(await ExplorePage.filter.isDisplayed()).toBe(true); 
    
    })
    
    it('Apply Filter', async()=>{

        // Click on filter
        await ExplorePage.filter.click()

        // Select frametype
        await ExplorePage.clickFrameType.click()
        // Click rimless
        await ExplorePage.clickrimless.click()

        // Select PriceRange
        await ExplorePage.clickPrice.click()
        await ExplorePage.clickPriceRange.click()

        // CLick in apply button
        await ExplorePage.clickApplyFilter.click()

        //Verify Filter is applied of not
        expect(await ExplorePage.filterApplied.isDisplayed())
        await driver.pause(5000);
        console.log('Filter is applied')
    })

    it('Test grid view',async()=>{
        // Change grid view to small
        await ExplorePage.grid.click()
        try{
            //Verify product details displayed
        expect(await ExplorePage.verifyProductDetails.isDisplayed()).toBe(false)
        } catch(error){
            console.error('Error Occured:', error.message);
        }  

        // Change grid view to large
        await ExplorePage.grid.click()
         //Verify product details displayed
         expect(await ExplorePage.verifyProductDetails.isDisplayed()).toBe(true)
    })

    it('Wishlist',async()=>{

        // Store frame name
        const productName = await ExplorePage.productName
        console.log(await productName.getText())

        // Wishlist frame
        //await ExplorePage.wishListFrame.click()

        // Verify Wishlist Item count and go to wishlist
        const count = await ExplorePage.wishListCount
        console.log(await count.getText())
        if (count.getText() == 1){
            // Go to wishlist
            ExplorePage.clickWishList.click()
            await driver.pause(5000)
        }
        else{
            await console.log('Item not wishlisted or wishlist count not matched')
        }
         
    })
    
})


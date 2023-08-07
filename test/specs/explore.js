
const { assert } = require('chai');
const ExplorePage = require ("..//pageobjects/explorepo");
const TestHelpers = require ("../utils/helper");
const path = require('path');


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
         await HelperClass.varticalScroll(400,1878,300)
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
        //enable to find whole prodcut details- will gave an error - error handled
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

    it('Item add to Wishlist',async()=>{

        // Store frame name
        const productName = await ExplorePage.productName
        console.log(await productName.getText())
        const expProductname = await productName.getText()

        //Wishlist frame
        await ExplorePage.wishListFrame.click()
        var count = await ExplorePage.wishListCount
        try{
        // Verify Wishlist Item count and go to wishlist
        console.log(await count.getText())
        }catch(error){
            console.error('Error Occured:', error.message);
        }
        await driver.pause(5000)
        await ExplorePage.clickWishList.click()
        await driver.pause(5000)

        // Verify wishlisted item name 
        const wishlistedFrameName = await ExplorePage.wishListedframeName
        console.log(await wishlistedFrameName.getText())
        const wishlistedName = await wishlistedFrameName.getText()

        // Perform the comparison using Chai assertions
        await assert.equal(expProductname, wishlistedName, 'Text values are not equal');

    })
    it('Remove items from wishlist', async()=>{

        // click clear list
        await ExplorePage.clickClearList.click()

        // Verify pop-up 
        expect(await ExplorePage.deletePopup.isDisplayed()).toBe(true)

        // Verify pop-up message
        const message = 'Are you sure you want to remove your wishlisted items'
        const popup = await ExplorePage.deleteMessage
        const popupMessage = await popup.getText()
        await assert.equal(message, popupMessage, 'Message not matched')

        //Filepath and sheetname of invalid_logindata file
        const filePath = path.join(__dirname, '../data/bansari_login.xlsx');
        const sheetName = 'login';

        //Read file
        const deleteWishlistedItem= await HelperClass.readDataFromExcel(filePath, sheetName);

        // click on Yes/No in pop-up as per user input
        if (deleteWishlistedItem[0] === '1')
        {
            await console.log(" IN condition")
            await ExplorePage.clickYesdeletePopup.click()
            // Verify item is removed from wishlist
            const wishlist = await ExplorePage.verifyEmptyWishlist
            console.log(await wishlist.getText())
            await expect(wishlist).toHaveText('No wishlisted items')
        }
        else{
            await ExplorePage.clickNodeletePopup.click()
            // Verify wishlisted item name 
            const wishlistedFrameName = await ExplorePage.wishListedframeName
            console.log(await wishlistedFrameName.getText())
            await expect(wishlistedFrameName).toHaveText('Vincent Chase Online')

        }

        //if delete=yes=> Click continue shopping
        await ExplorePage.clickContinueShopping.click()

        // Verify redirection page
        title = ExplorePage.verifyTitle;
        await expect(title).toHaveText('Explore')
        await console.log("Redirected to explore page successfully")
        
    })
    
})


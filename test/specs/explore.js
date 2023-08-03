const ExplorePage = require ("..//page_objects/explorepo")

describe('Explore test suite', ()=>{
   
    it('Click Explore test case', async()=>{
        await driver.pause(5000);
        // Click on explore
        await ExplorePage.explore.click();
        await driver.pause(5000);   
    })
    
})


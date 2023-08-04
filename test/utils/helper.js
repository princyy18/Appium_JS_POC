
class TestHelpers {

    // Helper function to pause the test execution for a specified time.
    async pause(milliseconds) {
      await browser.pause(milliseconds);
    }
  
    // Helper function to wait for an element to be displayed on the page.
    async waitForElementDisplayed(element, timeout = 20000) {
      await element.waitForDisplayed({ timeout });
    }
  
  }
  
module.exports = new TestHelpers();
  
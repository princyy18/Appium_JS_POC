
class LoginPage {

    //baseXpath and endpath to remove redudancy
    baseXPath = "//*[@resource-id='com.lenskart.app:id/";
    endXPath = "']";

    //define selectors using getter methods
    get clickLoginViaPhoneText() {
        return $(baseXPath + "loginMobile" + endXPath);
    }
}

module.exports = new LoginPage();

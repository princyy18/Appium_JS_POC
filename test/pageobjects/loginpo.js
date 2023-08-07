
class LoginPage {

    //baseXpath and endpath to remove redudancy of locators
    baseXPath = "//*[@resource-id='com.lenskart.app:id/";
    endXPath = "']";

    //define selectors using getter methods
    get clickLoginViaPhoneText() {
        return $(this.baseXPath + "loginMobile" + this.endXPath); 
    }

    get enterMobile() {
        return $(this.baseXPath + "input_phone_number" + this.endXPath);
    }

    get clickContinue() {
        return $(this.baseXPath + "btn_continue" + this.endXPath);
    }

    get skipAccessLocation() {
        return $(this.baseXPath + "text_do_it_later" + this.endXPath);
    }
    get skipTimeToPose() {
        
        let timeToPoseElement = $(this.baseXPath + "title" + this.endXPath);
        driver.pause(20000);
        if (timeToPoseElement.isDisplayed()){
            console.log("Inner if")
            const skipButton = $(this.baseXPath + "btn_skip" + this.endXPath);
            skipButton.click();
        }
        else{
            console.log("Time-to-Pose Screen is not present")
        }      
    }

    get homepageLogo() {
        return $(this.baseXPath + "iv_logo" + this.endXPath);
    }

    get homepageCall() {
        return $(this.baseXPath + "iv_call" + this.endXPath);
    }

    get LoginTextFieldErrorMessage() {
        return $(this.baseXPath + "textinput_error" + this.endXPath);
    }

    get pincode() {
        return $(this.baseXPath + "pin_otp_code" + this.endXPath);
    }
}

module.exports = new LoginPage();

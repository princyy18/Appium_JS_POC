
class LoginPage {

    //baseXpath and endpath to remove redudancy
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

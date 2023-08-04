class SearchPage {

    //baseXpath and endpath to remove redudancy of locators
    baseXPath = "//*[@resource-id='com.lenskart.app:id/";
    endXPath = "']";



    get clickSearch(){
        return $(this.baseXPath + "iv_icon" + this.endXPath);
       // this.elements.searchIcon.click();
    }

   get clickeyeglassed(){
    return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.widget.TextView")
   }
   
   
}
module.exports = new SearchPage();
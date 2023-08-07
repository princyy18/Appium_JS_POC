class ExplorePage {

    //baseXpath and endpath to remove redudancy of locators
    baseXPath = "//*[@resource-id='com.lenskart.app:id/";
    baseXPath1 = "//*[@resource-id='android:id/";
    endXPath = "']";
    appXpath = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup[2]/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/";
    filterXpath = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout[1]/"
   
    // get is a class property- getter method
    get explore () {
        return $('//android.view.ViewGroup[2]');
    }

    get verifyTitle(){
        return $(this.baseXPath + "tv_toolbar_title" + this.endXPath) // this represents current class object 
    }

    get clickWomen(){
        return $('//android.widget.LinearLayout[@content-desc="Women"]')

    }

    get shopByBudget(){
        return $(this.baseXPath + "text_heading" + this.endXPath)

    }

    get clickSection(){
        return $(this.appXpath +'android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.ImageView[1]')
    }

    get filter(){
        return $(this.baseXPath + "button_filter" + this.endXPath)
    }

    get filterAllValues(){
        return $$(this.baseXPath + "container_sub_category" + this.endXPath)
    }

    get clickFrameType(){
        return $(this.filterXpath + 'androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.TextView')
    }

    get clickrimless(){
        return $(this. filterXpath +'android.widget.FrameLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[3]/android.widget.CheckedTextView')
    }

    get clickPrice(){
        return $(this.filterXpath + 'androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[7]/android.widget.TextView') 
    }
    get clickPriceRange(){
        return $(this. filterXpath + 'android.widget.FrameLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.CheckedTextView')
    }

    get clickApplyFilter(){
        return $(this.baseXPath + "btn_apply" + this.endXPath)

    }
    get filterApplied(){
        return $(this.baseXPath + "filter_selected_indicator" + this.endXPath)

    }
    get grid(){
        return $(this.baseXPath + "button_switch_list_grid" + this.endXPath)

    }

    get verifyProductDetails(){
        return $(this.baseXPath + "product_detail" + this.endXPath)

    }

    get productName(){
        return $(this.baseXPath + "product_name_text" + this.endXPath)

    }

    get wishListFrame(){
        return $(this.baseXPath + "shortlist_icon" + this.endXPath)

    }
    get wishListCount(){
        return $(this.baseXPath + "text_cart_count" + this.endXPath)

    }

    get clickWishList(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout[1]/android.widget.FrameLayout')
    }

    get wishListedframeName(){
        return $(this.baseXPath + "title" + this.endXPath)
    }

    get clickClearList(){
        return $(this.baseXPath + "btn_clear" + this.endXPath)
    }
    get deletePopup(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout')
    }

    get deleteMessage(){
        return $(this.baseXPath1 + "message" + this.endXPath)

    }
    get clickNodeletePopup(){
        return $(this.baseXPath1 + "button2" + this.endXPath)

    }
    get clickYesdeletePopup(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]')

    }

    get verifyEmptyWishlist(){
        return $(this.baseXPath + "title" + this.endXPath) 
    }

    get clickContinueShopping(){
        return $(this.baseXPath + "button" + this.endXPath) 

    }

    get openWishlistedFrame()
    {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.LinearLayout')
    }

    get btnByNow(){
        return $(this.baseXPath + 'btn_primary' + this.endXPath)
    }



}
module.exports = new ExplorePage();
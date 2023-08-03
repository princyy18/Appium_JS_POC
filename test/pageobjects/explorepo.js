class ExplorePage {
    // elements = {
    //     explore: () => $('com.lenskart.app:id/item_selection_ll')
    //     }
   
    get explore () {
        return $('//android.view.ViewGroup[2]');
    }
}
module.exports = new ExplorePage();
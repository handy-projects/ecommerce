import { BaseStore } from "fluxible/addons";
import Actions from "../constants/Actions";

/*
This is a "products list store", i.e. it holds items for products page
 */

class ProductStore extends BaseStore {

  static storeName = "ProductStore"

  static handlers = {
    [Actions.LOAD_PRODUCT_LIST_SUCCESS]: "handleLoadSuccess"
  }

  constructor(dispatcher) {
    super(dispatcher);
    this.products = [];
  }

  handleLoadSuccess({ products }) {
    // waitFor??
    //this.dispatcher.waitFor("PhotoStore", () => {
      //this.currentFeature = feature;
      //this.products = products.map(photo => {photo.id});
      this.products = products;
      this.emitChange();
    //});
  }

  getProducts() {
    return this.products;
  }

  dehydrate() {
    return {
      products: this.products
    };
  }

  rehydrate(state) {
    this.products = state.products;
  }

}


export default ProductStore;

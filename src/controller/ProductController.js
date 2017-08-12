/**
 * @description ProductController Class
 * @class ProductController
 */
class ProductController {

  /**
   * @description ProductController constructor.
   * @param {Object} event event
   * @param {Object} VendingMachine vendingMachine
   * @constructs ProductController
   */
  constructor(event, vendingMachine) {
    this._event = event;
    this._vendingMachine = vendingMachine;
    
    event.selectProduct.add(this._selectProduct.bind(this));
  }

   /**
   * @private
   * @description selectProduct
   * @param {Product} product product
   * @param {Element} productElement product element
   * @method ProductController#_selectProduct
   */
  _selectProduct(product, productElement) {
    if(!product.hasStock()) {
      // log
      return;
    }

    if(!this._vendingMachine.isSaleAvailable(product.price)) {
      // log
      return;
    }

    product.stock -= 1;
    this._event.updateInsertion.dispatch(-product.price);
    this._event.updateProductElement.dispatch(product, productElement);
    // log
  }
}

export default ProductController;
